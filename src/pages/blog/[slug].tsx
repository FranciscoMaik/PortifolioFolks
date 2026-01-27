import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';
import ReactMarkdown from 'react-markdown';
import { getAllPostSlugs, getPostData, BlogPost, getSortedPostsData } from '../../utils/markdown';
import { Header, Footer } from '../../components';
import { BlogContainer, MainContent, SidebarContainer, PostTitle, PostMeta, PostList, PostListItem } from '../../styles/Blog/styles';
import { MarkdownContent } from '../../components/Blog/PostContent/styles';

interface PostProps {
  postData: BlogPost;
  recentPosts: BlogPost[];
}

export default function Post({ postData, recentPosts }: PostProps) {
  return (
    <>
      <Head>
        <title>{postData.frontmatter.title} | Francisco Maik</title>
      </Head>
      <Header />
      <BlogContainer>
        <MainContent>
          <article>
            <PostTitle>{postData.frontmatter.title}</PostTitle>
            <PostMeta>{postData.frontmatter.date}</PostMeta>
            <MarkdownContent>
                <ReactMarkdown>{postData.content}</ReactMarkdown>
            </MarkdownContent>
          </article>
        </MainContent>
        <SidebarContainer>
          <h3>Posts Recentes</h3>
           <PostList>
            {recentPosts.map(({ slug, frontmatter }) => (
              <PostListItem key={slug}>
                <Link href={`/blog/${slug}`}><a>{frontmatter.title}</a></Link>
              </PostListItem>
            ))}
          </PostList>
          <div style={{ marginTop: '2rem' }}>
              <Link href="/blog"><a>← Voltar para o Blog</a></Link>
          </div>
        </SidebarContainer>
      </BlogContainer>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = getPostData(params?.slug as string);
  const allPosts = getSortedPostsData();
  const recentPosts = allPosts.slice(0, 5); // Get 5 most recent posts

  return {
    props: {
      postData,
      recentPosts,
    },
  };
};
