import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { supabase } from '~/utils/supabase.server';

export async function loader() {
  try {
    // Test the connection by getting the current time from Supabase
    const { data, error } = await supabase
      .from('_realtime')
      .select('now()');

    if (error) throw error;

    return json({ status: 'Connected to Supabase!', timestamp: data?.[0]?.now });
  } catch (error) {
    console.error('Database Error:', error);
    return json({ 
      status: 'Error connecting to Supabase', 
      error: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
}

export default function TestDB() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Database Connection Test</h1>
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
} 