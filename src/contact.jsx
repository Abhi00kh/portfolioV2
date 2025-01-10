import { useState } from 'react';
import { Field, Label, Switch } from '@headlessui/react';

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ name, email, message });
  };

  return (
    <div className=" bg-gray-50 dark:bg-gray-900 ">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Get in Touch with Abhijit Khule</h2>
        <p className="mt-2 text-base sm:text-lg text-gray-600 dark:text-gray-300">
          Have any questions or want to work together? Feel free to send a message!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-10 sm:mt-16 max-w-xl">
        <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Your Name
            </label>
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="block w-full rounded-md  dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-gray-300 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Your Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@mail.com"
                className="block w-full rounded-md  dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-gray-300 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div className="sm:col-span-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Your Message
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
                className="block w-full rounded-md dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-gray-300 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <Field className="flex items-center gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={`${agreed ? 'bg-indigo-600' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out`}
              >
                <span className="sr-only">Agree to policies</span>
                <span className={`${agreed ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out`} />
              </Switch>
            </div>
            <Label className="text-sm text-gray-600 dark:text-gray-300">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-medium text-indigo-600 dark:text-indigo-400">
                privacy policy
              </a>
              .
            </Label>
          </Field>
        </div>
        <div className="mt-8">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
