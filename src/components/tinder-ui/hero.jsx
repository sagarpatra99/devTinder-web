export default function Hero() {
  return (
    <div
      className="bg-fixed bg-center bg-cover min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1618171889969-0feeb769fe78?auto=format&fit=crop&w=1470&q=80')"
      }}
    >
      <div className="">
        <h1 className="text-white text-7xl font-bold text-center">Welcome to DevTinder</h1>
      </div>
    </div>
  );
}
