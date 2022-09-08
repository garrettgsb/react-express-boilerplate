--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.10
-- Dumped by pg_dump version 9.5.10

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET search_path = public, pg_catalog;

ALTER TABLE ONLY public.resources DROP CONSTRAINT resources_subjects_id_fkey;
ALTER TABLE ONLY public.progress_tracker DROP CONSTRAINT progress_tracker_users_id_fkey;
ALTER TABLE ONLY public.progress_tracker DROP CONSTRAINT progress_tracker_subjects_id_fkey;
ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
ALTER TABLE ONLY public.subjects DROP CONSTRAINT subjects_pkey;
ALTER TABLE ONLY public.steps_to_resources DROP CONSTRAINT steps_to_resources_pkey;
ALTER TABLE ONLY public.resources DROP CONSTRAINT resources_pkey;
ALTER TABLE ONLY public.progress_tracker DROP CONSTRAINT progress_tracker_pkey;
ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.subjects ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.steps_to_resources ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.resources ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.progress_tracker ALTER COLUMN id DROP DEFAULT;
DROP SEQUENCE public.users_id_seq;
DROP TABLE public.users;
DROP SEQUENCE public.subjects_id_seq;
DROP TABLE public.subjects;
DROP SEQUENCE public.steps_to_resources_id_seq;
DROP TABLE public.steps_to_resources;
DROP SEQUENCE public.resources_id_seq;
DROP TABLE public.resources;
DROP SEQUENCE public.progress_tracker_id_seq;
DROP TABLE public.progress_tracker;
DROP EXTENSION plpgsql;
DROP SCHEMA public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: progress_tracker; Type: TABLE; Schema: public; Owner: vagrant
--

CREATE TABLE progress_tracker (
    id integer NOT NULL,
    users_id integer,
    subjects_id integer,
    highest_steps integer NOT NULL
);


ALTER TABLE progress_tracker OWNER TO vagrant;

--
-- Name: progress_tracker_id_seq; Type: SEQUENCE; Schema: public; Owner: vagrant
--

CREATE SEQUENCE progress_tracker_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE progress_tracker_id_seq OWNER TO vagrant;

--
-- Name: progress_tracker_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vagrant
--

ALTER SEQUENCE progress_tracker_id_seq OWNED BY progress_tracker.id;


--
-- Name: resources; Type: TABLE; Schema: public; Owner: vagrant
--

CREATE TABLE resources (
    id integer NOT NULL,
    subjects_id integer,
    step_number integer NOT NULL,
    step_description character varying(255) NOT NULL,
    article_url character varying(255),
    photo_url character varying(255),
    video_url character varying(255)
);


ALTER TABLE resources OWNER TO vagrant;

--
-- Name: resources_id_seq; Type: SEQUENCE; Schema: public; Owner: vagrant
--

CREATE SEQUENCE resources_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE resources_id_seq OWNER TO vagrant;

--
-- Name: resources_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vagrant
--

ALTER SEQUENCE resources_id_seq OWNED BY resources.id;


--
-- Name: steps_to_resources; Type: TABLE; Schema: public; Owner: vagrant
--

CREATE TABLE steps_to_resources (
    id integer NOT NULL,
    subjects_id integer,
    resources_id integer
);


ALTER TABLE steps_to_resources OWNER TO vagrant;

--
-- Name: steps_to_resources_id_seq; Type: SEQUENCE; Schema: public; Owner: vagrant
--

CREATE SEQUENCE steps_to_resources_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE steps_to_resources_id_seq OWNER TO vagrant;

--
-- Name: steps_to_resources_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vagrant
--

ALTER SEQUENCE steps_to_resources_id_seq OWNED BY steps_to_resources.id;


--
-- Name: subjects; Type: TABLE; Schema: public; Owner: vagrant
--

CREATE TABLE subjects (
    id integer NOT NULL,
    subject_name character varying(55) NOT NULL
);


ALTER TABLE subjects OWNER TO vagrant;

--
-- Name: subjects_id_seq; Type: SEQUENCE; Schema: public; Owner: vagrant
--

CREATE SEQUENCE subjects_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE subjects_id_seq OWNER TO vagrant;

--
-- Name: subjects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vagrant
--

ALTER SEQUENCE subjects_id_seq OWNED BY subjects.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: vagrant
--

CREATE TABLE users (
    id integer NOT NULL,
    first_name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    admin boolean NOT NULL
);


ALTER TABLE users OWNER TO vagrant;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: vagrant
--

CREATE SEQUENCE users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_id_seq OWNER TO vagrant;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vagrant
--

ALTER SEQUENCE users_id_seq OWNED BY users.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY progress_tracker ALTER COLUMN id SET DEFAULT nextval('progress_tracker_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY resources ALTER COLUMN id SET DEFAULT nextval('resources_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY steps_to_resources ALTER COLUMN id SET DEFAULT nextval('steps_to_resources_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY subjects ALTER COLUMN id SET DEFAULT nextval('subjects_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);


--
-- Data for Name: progress_tracker; Type: TABLE DATA; Schema: public; Owner: vagrant
--

COPY progress_tracker (id, users_id, subjects_id, highest_steps) FROM stdin;
1	2	1	0
\.


--
-- Name: progress_tracker_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vagrant
--

SELECT pg_catalog.setval('progress_tracker_id_seq', 1, true);


--
-- Data for Name: resources; Type: TABLE DATA; Schema: public; Owner: vagrant
--

COPY resources (id, subjects_id, step_number, step_description, article_url, photo_url, video_url) FROM stdin;
1	1	1	The physical hardware you stock in your kitchen is equally as important as the ingredients you choose and the cooking techniques you use. Use the following guides to help you find what you really need in the kitchen.	https://www.seriouseats.com/basic-starter-kitchen-equipment	\N	https://www.youtube.com/watch?v=5zt6_knK8Ms
2	1	2	The pantry is the backbone of your kitchen. In the following resource you will find tips to help you organize your refrigerator as well as a list of the essential building blocks to cooking all kinds of dishes.	https://www.eater.com/2020/3/30/21196551/how-to-stock-pantry-grocery-shopping-list-home-cooking	\N	\N
3	1	3	Refer to the following resource and familiarize yourself with the multiple essential skills needed for everyday cooking.	https://iccadubai.ae/stockpot/8-basic-cooking-skills-every-budding-chef-must-know	\N	\N
4	1	4	These are special occasion pancakes. Serve them at brunch, at your own risk. You will surely secure yourself top seed as host for every brunch in the future.	https://cooking.nytimes.com/recipes/1022931-lemon-ricotta-pancakes	https://i.pinimg.com/474x/f7/bf/0a/f7bf0a7d224f680bdaca3db6084064b6.jpg	https://www.youtube.com/watch?v=iSUIRCa1nwk
5	1	5	A rich, fragrant, deeply coloured pot of comfort	https://www.washingtonpost.com/news/voraciously/wp/2019/10/02/it-doesnt-take-hours-to-make-an-intense-dark-and-rich-french-onion-soup/	https://i.pinimg.com/736x/4e/8f/bb/4e8fbbfbd7362753beae4087af93df1e.jpg	https://www.youtube.com/watch?v=yV9gLR1reGU
6	1	6	Skirt steak is perfect for steak fajitas since it is a super beefy cut thats delicious when marinated and grilled.	https://www.seriouseats.com/grilled-skirt-steak-fajitas-food-lab-recipe	https://playswellwithbutter.com/wp-content/uploads/2022/07/Grilled-Skirt-Steak-Fajitas-6-595x397.jpg	https://www.youtube.com/watch?v=bptRd0YLVe4
7	1	7	A simple roasted cauliflower dish dressed up with a sophisticated vinaigrette	https://www.seriouseats.com/roasted-cauliflower-pine-nut-raisin-caper-food-lab-recipe	https://www.wellseasonedstudio.com/wp-content/uploads/2019/12/Sicilian-cauliflower-10-500x500.jpg	https://www.youtube.com/watch?v=tFYpMT8fcD4
8	1	8	A rich, hearty vegetarian lasagna stuffed with spinach, mushrooms, and cheese.	https://www.seriouseats.com/ultra-creamy-spinach-and-mushroom-lasagna-recipe	https://i.pinimg.com/originals/54/cd/02/54cd02c5b5dd84b0c82c245330c25e39.jpg	https://www.youtube.com/watch?v=shTIlV5iDQw
9	25	1	thyjvvv	https://www.youtube.com/watch?v=PKwu15ldZ7k	https://getbootstrap.com/docs/5.0/forms/overview/	https://github.com/Salkhaleeli/LEARNAZ/commits/master
10	26	1	gtgtgtg	https://www.youtube.com/watch?v=PKwu15ldZ7k	https://getbootstrap.com/docs/5.0/forms/overview/	https://github.com/Salkhaleeli/LEARNAZ/commits/master
\.


--
-- Name: resources_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vagrant
--

SELECT pg_catalog.setval('resources_id_seq', 10, true);


--
-- Data for Name: steps_to_resources; Type: TABLE DATA; Schema: public; Owner: vagrant
--

COPY steps_to_resources (id, subjects_id, resources_id) FROM stdin;
1	1	1
2	1	2
3	1	3
4	1	4
5	1	5
6	1	6
7	1	7
8	1	8
\.


--
-- Name: steps_to_resources_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vagrant
--

SELECT pg_catalog.setval('steps_to_resources_id_seq', 8, true);


--
-- Data for Name: subjects; Type: TABLE DATA; Schema: public; Owner: vagrant
--

COPY subjects (id, subject_name) FROM stdin;
1	Cooking
2	Chess
3	Writing
4	Guitar
5	Coding
6	Photography
7	Gardening
8	Knitting
9	Illustration
10	French
11	Walking
13	Walking
15	Walking
18	quiz
20	quiz
22	quizqqq
24	SPACE 2
25	ddddd
26	Arabic
\.


--
-- Name: subjects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vagrant
--

SELECT pg_catalog.setval('subjects_id_seq', 26, true);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: vagrant
--

COPY users (id, first_name, last_name, email, password, admin) FROM stdin;
1	Saad	Alkhaleeli	alkhaleelisaad@gmail.com	123	t
2	Siraj	Ibrahim	sirajwah@yahoo.ca	456	f
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vagrant
--

SELECT pg_catalog.setval('users_id_seq', 2, true);


--
-- Name: progress_tracker_pkey; Type: CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY progress_tracker
    ADD CONSTRAINT progress_tracker_pkey PRIMARY KEY (id);


--
-- Name: resources_pkey; Type: CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY resources
    ADD CONSTRAINT resources_pkey PRIMARY KEY (id);


--
-- Name: steps_to_resources_pkey; Type: CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY steps_to_resources
    ADD CONSTRAINT steps_to_resources_pkey PRIMARY KEY (id);


--
-- Name: subjects_pkey; Type: CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY subjects
    ADD CONSTRAINT subjects_pkey PRIMARY KEY (id);


--
-- Name: users_pkey; Type: CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: progress_tracker_subjects_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY progress_tracker
    ADD CONSTRAINT progress_tracker_subjects_id_fkey FOREIGN KEY (subjects_id) REFERENCES subjects(id) ON DELETE CASCADE;


--
-- Name: progress_tracker_users_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY progress_tracker
    ADD CONSTRAINT progress_tracker_users_id_fkey FOREIGN KEY (users_id) REFERENCES users(id) ON DELETE CASCADE;


--
-- Name: resources_subjects_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY resources
    ADD CONSTRAINT resources_subjects_id_fkey FOREIGN KEY (subjects_id) REFERENCES subjects(id) ON DELETE CASCADE;


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- Name: progress_tracker; Type: ACL; Schema: public; Owner: vagrant
--

REVOKE ALL ON TABLE progress_tracker FROM PUBLIC;
REVOKE ALL ON TABLE progress_tracker FROM vagrant;
GRANT ALL ON TABLE progress_tracker TO vagrant;
GRANT ALL ON TABLE progress_tracker TO learner;


--
-- Name: progress_tracker_id_seq; Type: ACL; Schema: public; Owner: vagrant
--

REVOKE ALL ON SEQUENCE progress_tracker_id_seq FROM PUBLIC;
REVOKE ALL ON SEQUENCE progress_tracker_id_seq FROM vagrant;
GRANT ALL ON SEQUENCE progress_tracker_id_seq TO vagrant;
GRANT SELECT,USAGE ON SEQUENCE progress_tracker_id_seq TO learner;


--
-- Name: resources; Type: ACL; Schema: public; Owner: vagrant
--

REVOKE ALL ON TABLE resources FROM PUBLIC;
REVOKE ALL ON TABLE resources FROM vagrant;
GRANT ALL ON TABLE resources TO vagrant;
GRANT ALL ON TABLE resources TO learner;


--
-- Name: resources_id_seq; Type: ACL; Schema: public; Owner: vagrant
--

REVOKE ALL ON SEQUENCE resources_id_seq FROM PUBLIC;
REVOKE ALL ON SEQUENCE resources_id_seq FROM vagrant;
GRANT ALL ON SEQUENCE resources_id_seq TO vagrant;
GRANT SELECT,USAGE ON SEQUENCE resources_id_seq TO learner;


--
-- Name: steps_to_resources; Type: ACL; Schema: public; Owner: vagrant
--

REVOKE ALL ON TABLE steps_to_resources FROM PUBLIC;
REVOKE ALL ON TABLE steps_to_resources FROM vagrant;
GRANT ALL ON TABLE steps_to_resources TO vagrant;
GRANT ALL ON TABLE steps_to_resources TO learner;


--
-- Name: steps_to_resources_id_seq; Type: ACL; Schema: public; Owner: vagrant
--

REVOKE ALL ON SEQUENCE steps_to_resources_id_seq FROM PUBLIC;
REVOKE ALL ON SEQUENCE steps_to_resources_id_seq FROM vagrant;
GRANT ALL ON SEQUENCE steps_to_resources_id_seq TO vagrant;
GRANT SELECT,USAGE ON SEQUENCE steps_to_resources_id_seq TO learner;


--
-- Name: subjects; Type: ACL; Schema: public; Owner: vagrant
--

REVOKE ALL ON TABLE subjects FROM PUBLIC;
REVOKE ALL ON TABLE subjects FROM vagrant;
GRANT ALL ON TABLE subjects TO vagrant;
GRANT ALL ON TABLE subjects TO learner;


--
-- Name: subjects_id_seq; Type: ACL; Schema: public; Owner: vagrant
--

REVOKE ALL ON SEQUENCE subjects_id_seq FROM PUBLIC;
REVOKE ALL ON SEQUENCE subjects_id_seq FROM vagrant;
GRANT ALL ON SEQUENCE subjects_id_seq TO vagrant;
GRANT SELECT,USAGE ON SEQUENCE subjects_id_seq TO learner;


--
-- Name: users; Type: ACL; Schema: public; Owner: vagrant
--

REVOKE ALL ON TABLE users FROM PUBLIC;
REVOKE ALL ON TABLE users FROM vagrant;
GRANT ALL ON TABLE users TO vagrant;
GRANT ALL ON TABLE users TO learner;


--
-- Name: users_id_seq; Type: ACL; Schema: public; Owner: vagrant
--

REVOKE ALL ON SEQUENCE users_id_seq FROM PUBLIC;
REVOKE ALL ON SEQUENCE users_id_seq FROM vagrant;
GRANT ALL ON SEQUENCE users_id_seq TO vagrant;
GRANT SELECT,USAGE ON SEQUENCE users_id_seq TO learner;


--
-- PostgreSQL database dump complete
--

