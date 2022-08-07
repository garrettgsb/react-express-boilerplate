/* possible queries */

/* Create a new user = POST req to /users */
'INSERT INTO polls (first_name, last_name, email, password, image_url)
Values ($1, $2, $3) RETURNING *;', [name, email, name_required]

/* all info for one user = GET req to /users/:id */
SELECT *
FROM users
WHERE id = 1; 

/* Create new BC = POST req to /clubs*/
'INSERT INTO bookclubs (user_id, name, description, private, image_url, current_book)
VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;',[user_id, name, description, private, image_url, current_book]

/* bookclub card for 'my clubs' on user profile)*/
SELECT name, description, image_url
FROM bookclubs
WHERE user_id = 1; 

/* bookclub cards for 'public clubs' on mainpage*/
SELECT name, description, image_url
FROM bookclubs
WHERE private = false;

/* bookclub card for club search, regardless of capitalization*/
SELECT name, description, image_url
FROM bookclubs
WHERE (name ILIKE '%HORROR%' OR description ILIKE '%HORROR%') AND private = false;

/* member count from one club*/
SELECT count(*)
from members
WHERE club_id = 1;

/* member list from one club*/
SELECT users.first_name, users.last_name
FROM members
JOIN users ON user_id = users.id
WHERE club_id = 1;

/* show the club finished books, their history*/
SELECT isbn
FROM finished_books
WHERE club_id = 2;

/* need to move current_read for a book club to finished (end of month)*/
UPDATE bookclubs
SET current_book = null WHERE id = 1;
/* chaining the query, set current to null and move it to finished*/
INSERT INTO finished_books (club_id, isbn)
VALUES (1, 123);

/* get ONE bookshelf for one user for userprofile page*/
SELECT isbn
FROM want_to_reads
WHERE user_id = 1;

SELECT isbn
FROM current_reads 
WHERE user_id = 1;

SELECT isbn
FROM have_reads
WHERE user_id = 1;

/* Show all books at one for a particular*/
-- SELECT users.id, current_reads.isbn as current_read, want_to_reads.isbn as want_to_read, have_reads.isbn as have_read
-- FROM users
-- JOIN current_reads ON users.id = current_reads.user_id
-- JOIN want_to_reads ON users.id = want_to_reads.user_id
-- JOIN have_reads ON users.id = have_reads.user_id
-- WHERE users.id = 1;


/* 'move' a book from one table to the next (i.e delete from one and move to another)*/
DELETE FROM current_reads
USING users
WHERE current_reads.isbn = 123 AND users.id = 1;
/* chain these in queries*/
INSERT INTO have_reads (user_id, isbn, api)
VALUES(1, 123, 'google');


/*show active meetings for club (aka where complete = false)*/
SELECT id as meeting_id, date, time, virtual_link, notes
FROM meetings
WHERE club_id = 1 AND complete = false;

/* update a meeting to completed (aka set complete to true), completed? button on BCLP*/
UPDATE meetings
SET complete = true WHERE meetings.id = 1;

/* show the want_to_read shelf of the BC owner so they can pick the BOTM*/
SELECT isbn
FROM want_to_reads
WHERE user_id = 1;

/**/

