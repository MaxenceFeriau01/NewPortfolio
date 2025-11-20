function Footer() {
  return (
    <footer className="border-t border-cyan-500/10 py-10 bg-[#081221]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Maxence Feriau - Développeur Full-Stack
          </p>
          <p className="text-gray-500 text-sm">
            Fait avec ❤️ avec React, Node.js & Docker
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
