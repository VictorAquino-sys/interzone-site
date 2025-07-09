// src/app/page.tsx
import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/en'); // or redirect to your default locale (e.g., 'en' or 'es')
}
