interface RequestBody {
  identifier: string;
  password: string;
}

export async function POST(request:Request) {
  const body:RequestBody = await request.json();
  const res = await fetch(`https://strapi.anapiaorienta.it/api/auth/local`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const user = await res.json();
  if(user) {
    return new Response(JSON.stringify(user))
  } else {
    return new Response(JSON.stringify(null))
  }
}