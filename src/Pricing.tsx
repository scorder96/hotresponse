import { CheckIcon } from "@radix-ui/react-icons";

export function Pricing() {
  return (
    <section className="py-16">
      <h2 className="text-lg text-center font-bold mb-8">Pricing</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4">
        <div className="rounded shadow hover:shadow-lg p-4">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600 text-2xl md:text-2xl font-bold mb-4">
            Free
          </h2>
          <div className="mb-8">
            <span className="text-4xl font-bold">$0</span>
            <span className="ms-2 font-light">/ month</span>
          </div>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              Upto three projects <CheckIcon className="size-6 text-yellow-400" />
            </li>
            <li className="flex items-center justify-between">
              300 feedbacks <CheckIcon className="size-6 text-yellow-400" />
            </li>
            <li className="flex items-center justify-between">
              All features <CheckIcon className="size-6 text-yellow-400" />
            </li>
          </ul>
        </div>
        <div className="rounded shadow hover:shadow-lg p-4">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600 text-2xl md:text-2xl font-bold mb-4">
            Standard
          </h2>
          <div className="mb-8">
            <span className="text-4xl font-bold">$14</span>
            <span className="ms-2 font-light">/ month</span>
          </div>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              Upto ten projects <CheckIcon className="size-6 text-yellow-400" />
            </li>
            <li className="flex items-center justify-between">
              10000 feedbacks <CheckIcon className="size-6 text-yellow-400" />
            </li>
            <li className="flex items-center justify-between">
              All features <CheckIcon className="size-6 text-yellow-400" />
            </li>
            <li className="flex items-center justify-between">
              Remove slushfeed branding
              <CheckIcon className="size-6 text-yellow-400" />
            </li>
          </ul>
        </div>
        <div className="rounded shadow hover:shadow-lg p-4">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600 text-2xl md:text-2xl font-bold mb-4">
            Premium
          </h2>
          <div className="mb-8">
            <span className="text-4xl font-bold">$69</span>
            <span className="ms-2 font-light">/ month</span>
          </div>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              Unlimited projects <CheckIcon className="size-6 text-yellow-400" />
            </li>
            <li className="flex items-center justify-between">
              Unlimited feedbacks <CheckIcon className="size-6 text-yellow-400" />
            </li>
            <li className="flex items-center justify-between">
              All features <CheckIcon className="size-6 text-yellow-400" />
            </li>
            <li className="flex items-center justify-between">
              Remove slushfeed branding
              <CheckIcon className="size-6 text-yellow-400" />
            </li>
            <li className="flex items-center justify-between">
              Priority support <CheckIcon className="size-6 text-yellow-400" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
