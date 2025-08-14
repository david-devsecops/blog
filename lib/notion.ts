import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  published: boolean
  featuredImage: string
  date: string
  readTime: number
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  demoUrl: string
  githubUrl: string
  imageUrl: string
  featured: boolean
}

// 블로그 포스트 가져오기
export async function getBlogPosts(limit?: number): Promise<BlogPost[]> {
  try {
    const response = await notion.databases.query({
      database_id: process.env.BLOG_DATABASE_ID!,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
      page_size: limit || 100,
    })

    return response.results.map((page: any) => ({
      id: page.id,
      title: page.properties.Name?.title[0]?.plain_text || '',
      slug: page.properties.Slug?.rich_text[0]?.plain_text || '',
      excerpt: page.properties.Excerpt?.rich_text[0]?.plain_text || '',
      content: page.properties.Content?.rich_text[0]?.plain_text || '',
      category: page.properties.Category?.select?.name || '',
      tags: page.properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
      published: page.properties.Published?.checkbox || false,
      featuredImage: page.properties['Featured Image']?.url || '',
      date: page.properties.Date?.date?.start || '',
      readTime: page.properties['Read Time']?.number || 5,
    }))
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

// 프로젝트 가져오기
export async function getProjects(): Promise<Project[]> {
  try {
    const response = await notion.databases.query({
      database_id: process.env.PROJECTS_DATABASE_ID!,
      sorts: [
        {
          property: 'Featured',
          direction: 'descending',
        },
      ],
    })

    return response.results.map((page: any) => ({
      id: page.id,
      title: page.properties.Name?.title[0]?.plain_text || '',
      description: page.properties.Description?.rich_text[0]?.plain_text || '',
      technologies: page.properties.Technologies?.multi_select?.map((tech: any) => tech.name) || [],
      demoUrl: page.properties['Demo URL']?.url || '',
      githubUrl: page.properties['GitHub URL']?.url || '',
      imageUrl: page.properties['Image URL']?.url || '',
      featured: page.properties.Featured?.checkbox || false,
    }))
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}
