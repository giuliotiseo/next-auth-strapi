interface RequestBody {
  email: string;
  password: string;
}

// Helpers ------------------------------------------------------------------------------------------------------------------------------------------------
function makeId(length:number):string {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;

  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }

  return result;
}

function generateUsername(email:string) {
  return email.split("@")[0].replace(/[^\w\s]|_/g, '').replace(/\s+/g, '').concat(`-${makeId(4).toLowerCase()}`)
}


// POST REQUEST ------------------------------------------------------------------------------------------------------------------------------------------------
export const POST = async (request:Request) => {
  const body:RequestBody = await request.json();
  const { email, password } = body;

  try {
    const username = generateUsername(email);
    const res = await fetch(`${process.env.STRAPI_BACKEND_API}/auth/local/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email: email,
        password: password
      })
    });

    // try {
    //   const response = await fetch(`${process.env.STRAPI_BACKEND_API}/profiles`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       data: {
    //         username,
    //       }
    //     })
    //   });

    // } catch(err:any) {
    //   const errorMessage = err?.message || "Errore sconosciuto"
    //   return new NextResponse(errorMessage, {
    //     status: 500
    //   })
    // }

    return new Response("User has been created", {
      status: 201
    })
  } catch(err:any) {
    const errorMessage = err?.message || "Unknown error"
    return new Response(errorMessage, {
      status: 500
    })
  }
} 