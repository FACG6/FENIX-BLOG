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

insert into users (name, email, password) values ('aballah', 'abodsaid1996@gmail.com', '$2a$10$/a4e33P3VlXy6HwkuwcrNuukhn5OXUxmKqVTZ0KQvr3L/KfjjUNPK');

insert into posts (userId, post, postType) values ('1', 'Welcome to this blog', true);


commit;
