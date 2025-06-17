// /app/api/revalidate/route.ts
import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const secret = searchParams.get('secret')

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  revalidatePath('/blog') // ✅ Use revalidatePath in App Router

  return NextResponse.json({ revalidated: true })
}
