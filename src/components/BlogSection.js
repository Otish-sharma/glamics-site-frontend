import { ArrowRight } from "lucide-react";

export default function BlogSection() {
  const blogs = [
    {
      date: "15 Dec",
      title: "Cuticle Pushers & Trimmers",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
      img: "https://wallpaperaccess.com/full/318864.jpg",
      author: "Admin",
    },
    {
      date: "15 Dec",
      title: "Cuticle Pushers & Trimmers",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
      img: "https://tse2.mm.bing.net/th/id/OIP.QzuTm8H88fISDiWT8iXB4wAAAA?r=0&w=474&h=254&rs=1&pid=ImgDetMain&o=7&rm=3",
      author: "Admin",
    },
    {
      date: "15 Dec",
      title: "Cuticle Pushers & Trimmers",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
      img: "https://img.freepik.com/free-photo/cute-woman-bright-hat-purple-blouse-is-leaning-stand-with-dresses-posing-with-package-isolated-background_197531-17610.jpg",
      author: "Admin",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Latest News & Blog</h2>
        <a href="/" className="text-sm font-medium text-pink-600 flex items-center">
          View All Blog <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img src={blog.img} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-500">By {blog.author}</p>
              <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{blog.desc}</p>
              <button className="mt-4 text-sm text-pink-600 flex items-center">
                Read More <ArrowRight className="ml-1 w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
