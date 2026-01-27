import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getSortedPostsData, BlogPost } from '../../utils/markdown';
import { Header, Footer } from '../../components';
import { BlogContainer, MainContent, SidebarContainer, PostList, PostListItem } from '../../styles/Blog/styles';

interface BlogIndexProps {
  allPostsData: BlogPost[];
}

export default function Blog({ allPostsData }: BlogIndexProps) {
  return (
    <>
      <Head>
        <title>Blog | Francisco Maik</title>
      </Head>
      <Header />
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
                <Link href={`/blog/${slug}`}><a>{frontmatter.title}</a></Link>
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
