import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Footer, Header } from "../../components";
import {
	BlogContainer,
	HeaderWrapper,
	MainContent,
	PostList,
	PostListItem,
	SidebarContainer,
} from "../../styles/Blog/styles";
import { type BlogPost, getSortedPostsData } from "../../utils/markdown";

interface BlogIndexProps {
	allPostsData: BlogPost[];
}

export default function Blog({ allPostsData }: BlogIndexProps) {
	return (
		<>
			<Head>
				<title>Blog | Francisco Maik</title>
			</Head>
			<HeaderWrapper>
				<Header />
			</HeaderWrapper>
			<BlogContainer>
				<MainContent>
					<h1>Últimos Posts</h1>
					<PostList>
						{allPostsData.map(({ slug, frontmatter }) => (
							<PostListItem key={slug}>
								<Link href={`/blog/${slug}`}>
									<a>
										<h3>{frontmatter.title}</h3>
										<p>{frontmatter.excerpt}</p>
										<small>{frontmatter.date}</small>
									</a>
								</Link>
							</PostListItem>
						))}
					</PostList>
				</MainContent>
				<SidebarContainer>
					<h3>Posts Recentes</h3>
					<PostList>
						{allPostsData.slice(0, 5).map(({ slug, frontmatter }) => (
							<PostListItem key={slug}>
								<Link href={`/blog/${slug}`}>
									<a>{frontmatter.title}</a>
								</Link>
							</PostListItem>
						))}
					</PostList>
				</SidebarContainer>
			</BlogContainer>
			<Footer />
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
};
