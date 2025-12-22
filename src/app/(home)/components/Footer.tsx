export default function Footer() {
  return (
    <div className="w-full h-32 bg-neutral-800">
      <div className="flex items-center justify-center h-full">
        <p className="text-sm text-white">
          &copy; {new Date().getFullYear()} Kalyavitation. All rights reserved.
        </p>
      </div>
    </div>
  );
}
