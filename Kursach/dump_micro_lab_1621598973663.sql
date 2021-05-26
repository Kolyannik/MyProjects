--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 13.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: collection_infos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.collection_infos (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "collectionId" integer
);


ALTER TABLE public.collection_infos OWNER TO postgres;

--
-- Name: collection_infos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.collection_infos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.collection_infos_id_seq OWNER TO postgres;

--
-- Name: collection_infos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.collection_infos_id_seq OWNED BY public.collection_infos.id;


--
-- Name: collections; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.collections (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "serviceId" integer
);


ALTER TABLE public.collections OWNER TO postgres;

--
-- Name: collections_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.collections_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.collections_id_seq OWNER TO postgres;

--
-- Name: collections_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.collections_id_seq OWNED BY public.collections.id;


--
-- Name: services; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.services (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userServiceId" integer
);


ALTER TABLE public.services OWNER TO postgres;

--
-- Name: services_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.services_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.services_id_seq OWNER TO postgres;

--
-- Name: services_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.services_id_seq OWNED BY public.services.id;


--
-- Name: user_services; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_services (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer
);


ALTER TABLE public.user_services OWNER TO postgres;

--
-- Name: user_services_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_services_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_services_id_seq OWNER TO postgres;

--
-- Name: user_services_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_services_id_seq OWNED BY public.user_services.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255),
    password character varying(255),
    role character varying(255) DEFAULT 'USER'::character varying,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: work_infos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.work_infos (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "workId" integer
);


ALTER TABLE public.work_infos OWNER TO postgres;

--
-- Name: work_infos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.work_infos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.work_infos_id_seq OWNER TO postgres;

--
-- Name: work_infos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.work_infos_id_seq OWNED BY public.work_infos.id;


--
-- Name: works; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.works (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "serviceId" integer
);


ALTER TABLE public.works OWNER TO postgres;

--
-- Name: works_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.works_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.works_id_seq OWNER TO postgres;

--
-- Name: works_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.works_id_seq OWNED BY public.works.id;


--
-- Name: collection_infos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.collection_infos ALTER COLUMN id SET DEFAULT nextval('public.collection_infos_id_seq'::regclass);


--
-- Name: collections id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.collections ALTER COLUMN id SET DEFAULT nextval('public.collections_id_seq'::regclass);


--
-- Name: services id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.services ALTER COLUMN id SET DEFAULT nextval('public.services_id_seq'::regclass);


--
-- Name: user_services id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_services ALTER COLUMN id SET DEFAULT nextval('public.user_services_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: work_infos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.work_infos ALTER COLUMN id SET DEFAULT nextval('public.work_infos_id_seq'::regclass);


--
-- Name: works id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.works ALTER COLUMN id SET DEFAULT nextval('public.works_id_seq'::regclass);


--
-- Data for Name: collection_infos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.collection_infos (id, title, description, "createdAt", "updatedAt", "collectionId") FROM stdin;
\.


--
-- Data for Name: collections; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.collections (id, name, "createdAt", "updatedAt", "serviceId") FROM stdin;
1	Saccharomyces сerevisiae	2021-05-18 11:04:19.918+03	2021-05-18 11:04:19.918+03	\N
2	Candida albicans 806	2021-05-18 11:05:24.091+03	2021-05-18 11:05:24.091+03	\N
3	Rhodococcus sp	2021-05-18 11:10:11.078+03	2021-05-18 11:10:11.078+03	\N
4	E Coli	2021-05-18 11:10:23.945+03	2021-05-18 11:10:23.945+03	\N
5	pyridinivorans	2021-05-18 11:11:07.668+03	2021-05-18 11:11:07.668+03	\N
6	Gordonia phthalatica	2021-05-18 11:11:33.39+03	2021-05-18 11:11:33.39+03	\N
7	Microbacterium sediminis 	2021-05-18 11:11:49.743+03	2021-05-18 11:11:49.743+03	\N
8	Microbacterium aurum	2021-05-18 11:12:14.488+03	2021-05-18 11:12:14.488+03	\N
9	Mycolicibacterium smegmatis	2021-05-18 11:12:25.021+03	2021-05-18 11:12:25.021+03	\N
10	Kocuria	2021-05-18 11:13:02.657+03	2021-05-18 11:13:02.657+03	\N
\.


--
-- Data for Name: services; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.services (id, "createdAt", "updatedAt", "userServiceId") FROM stdin;
\.


--
-- Data for Name: user_services; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_services (id, "createdAt", "updatedAt", "userId") FROM stdin;
1	2021-05-19 19:55:18.75+03	2021-05-19 19:55:18.75+03	1
2	2021-05-19 19:55:35.107+03	2021-05-19 19:55:35.107+03	2
3	2021-05-19 19:56:02.51+03	2021-05-19 19:56:02.51+03	3
4	2021-05-20 22:21:52.867+03	2021-05-20 22:21:52.867+03	4
5	2021-05-21 00:55:14.046+03	2021-05-21 00:55:14.046+03	5
6	2021-05-21 00:59:11.049+03	2021-05-21 00:59:11.049+03	6
7	2021-05-21 00:59:40.806+03	2021-05-21 00:59:40.806+03	7
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, password, role, "createdAt", "updatedAt") FROM stdin;
1	user@mail.ru	user	ADMIN	2021-05-19 19:55:18.737+03	2021-05-19 19:55:18.737+03
2	kolyannik@mail.ru	kolyannik	ADMIN	2021-05-19 19:55:35.102+03	2021-05-19 19:55:35.102+03
3	admin@mail.ru	admin	ADMIN	2021-05-19 19:56:02.505+03	2021-05-19 19:56:02.505+03
4	123@mail.ru	123	ADMIN	2021-05-20 22:21:52.856+03	2021-05-20 22:21:52.856+03
5	medas5555@mail.ru	12345678	ADMIN	2021-05-21 00:55:14.035+03	2021-05-21 00:55:14.035+03
6	dragonstonesdaughter@gmail.com	12345678	ADMIN	2021-05-21 00:59:11.045+03	2021-05-21 00:59:11.045+03
7	medvedas5555@mail.ru	12345678	ADMIN	2021-05-21 00:59:40.801+03	2021-05-21 00:59:40.801+03
\.


--
-- Data for Name: work_infos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.work_infos (id, title, description, "createdAt", "updatedAt", "workId") FROM stdin;
\.


--
-- Data for Name: works; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.works (id, name, "createdAt", "updatedAt", "serviceId") FROM stdin;
2	Бактерии почв Антарктиды	2021-05-18 11:08:42.977+03	2021-05-18 11:08:42.977+03	\N
3	Биологически активные вещества дрожжевых грибов	2021-05-18 11:09:10.447+03	2021-05-18 11:09:10.447+03	\N
4	Получение и использование органического селена	2021-05-18 11:09:45.953+03	2021-05-18 11:09:45.953+03	\N
7	ertrtert	2021-05-20 19:25:14.247+03	2021-05-20 19:25:14.247+03	\N
13	dvsfd	2021-05-20 20:38:17.786+03	2021-05-20 20:38:17.786+03	\N
15	322	2021-05-20 21:07:16.098+03	2021-05-20 21:07:16.098+03	\N
16	qwe	2021-05-20 21:28:17.773+03	2021-05-20 21:28:17.773+03	\N
\.


--
-- Name: collection_infos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.collection_infos_id_seq', 1, false);


--
-- Name: collections_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.collections_id_seq', 13, true);


--
-- Name: services_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.services_id_seq', 1, false);


--
-- Name: user_services_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_services_id_seq', 7, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 7, true);


--
-- Name: work_infos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.work_infos_id_seq', 1, false);


--
-- Name: works_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.works_id_seq', 18, true);


--
-- Name: collection_infos collection_infos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.collection_infos
    ADD CONSTRAINT collection_infos_pkey PRIMARY KEY (id);


--
-- Name: collections collections_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.collections
    ADD CONSTRAINT collections_name_key UNIQUE (name);


--
-- Name: collections collections_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.collections
    ADD CONSTRAINT collections_pkey PRIMARY KEY (id);


--
-- Name: services services_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.services
    ADD CONSTRAINT services_pkey PRIMARY KEY (id);


--
-- Name: user_services user_services_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_services
    ADD CONSTRAINT user_services_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: work_infos work_infos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.work_infos
    ADD CONSTRAINT work_infos_pkey PRIMARY KEY (id);


--
-- Name: works works_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.works
    ADD CONSTRAINT works_name_key UNIQUE (name);


--
-- Name: works works_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.works
    ADD CONSTRAINT works_pkey PRIMARY KEY (id);


--
-- Name: collection_infos collection_infos_collectionId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.collection_infos
    ADD CONSTRAINT "collection_infos_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES public.collections(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: collections collections_serviceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.collections
    ADD CONSTRAINT "collections_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES public.services(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: services services_userServiceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.services
    ADD CONSTRAINT "services_userServiceId_fkey" FOREIGN KEY ("userServiceId") REFERENCES public.user_services(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: user_services user_services_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_services
    ADD CONSTRAINT "user_services_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: work_infos work_infos_workId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.work_infos
    ADD CONSTRAINT "work_infos_workId_fkey" FOREIGN KEY ("workId") REFERENCES public.works(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: works works_serviceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.works
    ADD CONSTRAINT "works_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES public.services(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

