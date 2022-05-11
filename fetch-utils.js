const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';
const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getDogs() {
    // from the dogs table, select all items
    const response = await client.from('dogs').select();
    console.log(response);
    return response.data;

    // and return the response
   
}

export async function getDog(id) {
    // from the dogs table, select a single dog who has the matching id
const response = await client.from('dogs').select()


    // and return the response
    return response.data;    
}
