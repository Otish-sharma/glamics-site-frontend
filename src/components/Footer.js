import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-8 border-b border-gray-700 pb-8">
        {/* Brands */}
        <div>
          <h3 className="font-bold mb-4">Brands</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Zara</li>
            <li>Guess</li>
            <li>Mango</li>
            <li>LCWaikiki</li>
            <li>Monda</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-bold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Watches</li>
            <li>Watch Accessories</li>
            <li>Clocks</li>
            <li>Jewellery</li>
            <li>Women’s Collection</li>
          </ul>
        </div>

        {/* Accessories */}
        <div>
          <h3 className="font-bold mb-4">Accessories</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Order Tracking</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Tutorials</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Sale</li>
            <li>Quick Ship</li>
            <li>New Designs</li>
            <li>Protection Plan</li>
            <li>Gift Cards</li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="font-bold mb-4">Policies</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Policy</li>
            <li>Dressy Inside</li>
            <li>About Us</li>
            <li>Company</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-bold mb-4">Help</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Contact us</li>
            <li>About us</li>
            <li>Reviews</li>
            <li>Terms of Service</li>
            <li>Refund policy</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center py-6 border-b border-gray-700">
        {/* Download Apps */}
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <p className="font-bold mb-3">Download Our Apps</p>
          <div className="flex space-x-4">
            <div className="p-2 bg-white rounded-full">
              <FaGooglePlay className="text-black text-xl" />
            </div>
            <div className="p-2 bg-white rounded-full">
              <FaApple className="text-black text-xl" />
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <p className="font-bold mb-3">Follow us</p>
          <div className="flex space-x-4">
            <div className="p-2 bg-gray-800 rounded-full">
              <FaFacebookF />
            </div>
            <div className="p-2 bg-gray-800 rounded-full">
              <FaXTwitter />
            </div>
            <div className="p-2 bg-gray-800 rounded-full">
              <FaLinkedinIn />
            </div>
            <div className="p-2 bg-gray-800 rounded-full">
              <FaYoutube />
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-right">
          <p className="font-bold mb-2">Need help? Call now!</p>
          <p className="text-lg font-semibold">(500) 8001 8588, (500) 544 6550</p>
        </div>

        <img
          src="/glamics.png"
          alt="logo"
          className="h-8 w-30"
        />
      </div>

      {/* Payment + Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6">
        <p className="text-sm text-gray-400">Copyright 2024 © Temptics</p>
        <div className="flex space-x-3 mt-3 md:mt-0">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh7eqXXp9kZi9jHb_eYgzXZYSZrkwGIFCZgg&s" alt="Apple Pay" className="h-6" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtqrJauxAKD0PGf2pK5XSxkXQMof85eAnMRA&s" alt="Google Pay" className="h-6" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Q74avUHxrEE_IrqCZhxT5aC0xj3RJuejjQ&s" alt="Stripe" className="h-6" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLEWdAIhN8rkav1WO3WwfhchgTZUcqZMp90w&s" alt="Square" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-6" />
        </div>
      </div>
    </footer>
  );
}
