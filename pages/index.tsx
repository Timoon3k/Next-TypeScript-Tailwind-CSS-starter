import * as React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
	return (
		<Layout title='Home | Next.js + TypeScript Starter'>
			<h1 className='h-20 underline'>Hello Next.js 👋</h1>
		</Layout>
	)
}

export default IndexPage
