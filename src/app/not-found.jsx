import Link from 'next/link'
import { headers } from 'next/headers'
 
export default async function NotFound() {
  const headersList = headers()
  return (
    <div className="hero min-h-screen ">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Page Not Found</h1>
      <p className="py-6">Sorry, the page you're looking for doesn't exist. Please check the URL or navigate back to the homepage.</p>
      <button className="btn btn-primary">Back to Homepage</button>
    </div>
  </div>
</div>

  )
}