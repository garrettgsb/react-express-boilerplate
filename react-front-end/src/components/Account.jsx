// Account.jsx
// This component is used to display the account information of the user. It is used to display the user's name, email, and the date the account was created. It also allows the user to change their password.

import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_USER } from "../graphql/mutations";
import { GET_USER } from "../graphql/queries";
import { Form, Button, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Account = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const history = useHistory();
  const { t } = useTranslation();
  const [updateUser] = useMutation(UPDATE_USER);
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { email: user.email },
  });
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errorAlert, setErrorAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);

  useEffect(() => {
    if (data) {
      setPassword(data.user.password);
    }
  }, [data]);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match");
      setErrorAlert(true);
      return;
    }
    try {
      const token = await getAccessTokenSilently();
      await updateUser({
        variables: {
          email: user.email,
          password: newPassword,
        },
        context: {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      });
      setMessage("Password updated successfully");
      setSuccessAlert(true);
      setPassword(newPassword);
    } catch (error) {
      setMessage("Error updating password");
      setErrorAlert(true);
    }
  };

  return (
    <div className="container">
      <h2>{t("account.account")}</h2>
      <div className="account">
        <div className="account-info">
          <h3>{t("account.accountInfo")}</h3>
          <p>
            <strong>{t("account.name")}:</strong> {user.name}
          </p>
          <p>
            <strong>{t("account.email")}:</strong> {user.email}
          </p>
          <p>
            <strong>{t("account.dateCreated")}:</strong>{" "}
            {data.user.createdAt}
          </p>
        </div>
        <div className="change-password">
          <h3>{t("account.changePassword")}</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formPassword">
              <Form
                type="password"
                placeholder={t("account.currentPassword")}
                value={password}
                disabled
              />
            </Form.Group>
            <Form.Group controlId="formNewPassword">
              <Form.Control
                type="password"
                placeholder={t("account.newPassword")}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formConfirmPassword">
              <Form.Control
                type="password"
                placeholder={t("account.confirmPassword")}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {t("account.changePassword")}
            </Button>
          </Form>
          {errorAlert && (
            <Alert
              variant="danger"
              onClose={() => setErrorAlert(false)}
              dismissible
            >
              {message}
            </Alert>
          )}
          {successAlert && (
            <Alert
              variant="success"
              onClose={() => setSuccessAlert(false)}
              dismissible
            >
              {message}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
