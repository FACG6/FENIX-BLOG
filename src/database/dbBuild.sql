begin;

drop table if exists users, posts, comments;

create table users (
  userId serial primary key,
  name varchar(255) not null,
  email varchar(255) not null UNIQUE,
  password varchar(255) not null
);

create table posts (
  postId serial primary key,
  userId integer references users(userId),
  post text not null,
  postType boolean not null
);

create table comments (
  commentId serial primary key,
  postId integer references posts(postId),
  userId integer references users(userId),
  comment text not null
);

insert into users (name, email, password) values ('aballah', 'jisg@gmail.com', '123');
insert into users (name, email, password) values ('othman', 'isogs@gmail.com', '456');
insert into users (name, email, password) values ('abd', 'abodsaid1996@gmail.com', '$2a$10$/a4e33P3VlXy6HwkuwcrNuukhn5OXUxmKqVTZ0KQvr3L/KfjjUNPK');

insert into posts (userId, post, postType) values ('1', 'post 1 from user 1', true);
insert into posts (userId, post, postType) values ('1', 'post 2 from user 1', true);
insert into posts (userId, post, postType) values ('2', 'post 3 from user 2', true);

insert into comments (postId ,userId, comment) values ('2', '1', 'comment 1 from user 1');
insert into comments (postId ,userId, comment) values ('2', '1', 'comment 2 from user 1');
insert into comments (postId ,userId, comment) values ('2', '2', 'comment 3 from user 2');
insert into comments (postId ,userId, comment) values ('3', '1', 'comment 1 from user 1');
insert into comments (postId ,userId, comment) values ('3', '2', 'comment 2 from user 2');




commit;
