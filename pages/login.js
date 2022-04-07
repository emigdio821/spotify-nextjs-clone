import { getProviders, signIn } from "next-auth/react";

export default function login({ providers }) {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="w-20 mb-5"
        src="https://links.papareact.com/9xl"
        alt="Spotify logo"
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-[#1fdf64] hover:bg-[#18B250] text-black font-medium p-2 px-10 rounded-full uppercase"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
