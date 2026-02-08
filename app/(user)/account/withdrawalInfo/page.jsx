import { ChevronLeft, Save } from 'lucide-react';
import Link from 'next/link';

export default function WithdrawalInformationPage() {
  return (
    // ✅ navbar থেকে আরও নিচে
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* HEADER */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-2xl mx-auto px-4">
          <div className="h-16 flex items-center gap-4">
            <Link
              href="/account"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </Link>

            <h1 className="text-xl font-semibold text-gray-800">
              Withdrawal Information
            </h1>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* FORM CARD */}
        <div className="bg-white rounded-lg p-6 ring-1 ring-black ring-opacity-5">
          <p className="text-gray-600 mb-6">
            Set up your withdrawal information to enable withdrawals from your
            account. This information will be used when you request to withdraw
            funds.
          </p>

          <form className="space-y-6">
            {/* Withdrawal Method */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Withdrawal Method
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-yellow-500 transition-colors">
                <option>Bank Account</option>
                <option>Touch &apos;n Go eWallet</option>
                <option>USDT wallet address</option>
              </select>
            </div>

            {/* Bank Name */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Bank Name
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-yellow-500 transition-colors">
                <option>Select bank</option>
                <option>Maybank</option>
                <option>CIMB Bank</option>
                <option>Public Bank</option>
                <option>Hong Leong Bank</option>
                <option>RHB Bank</option>
                <option>Bank Islam</option>
                <option>AmBank</option>
                <option>Bank Rakyat</option>
                <option>BSN (Bank Simpanan Nasional)</option>
                <option>HSBC</option>
                <option>Standard Chartered</option>
                <option>OCBC Bank</option>
                <option>UOB Bank</option>
                <option>Alliance Bank</option>
                <option>Affin Bank</option>
                <option>Bank Muamalat</option>
                <option>Agrobank</option>
                <option>MBSB Bank</option>
              </select>
            </div>

            {/* Account Holder */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Account Holder Name
              </label>
              <input
                type="text"
                defaultValue="Nikita Ashley Fernandez"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-yellow-500 transition-colors"
              />
            </div>

            {/* Account Number */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Account Number
              </label>
              <input
                type="text"
                defaultValue="23650218816"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-yellow-500 transition-colors"
              />
            </div>

            {/* BUTTON – YELLOW */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium
                         bg-yellow-400 text-black hover:bg-yellow-500 transition-colors"
            >
              <Save className="w-5 h-5" />
              Update Information
            </button>
          </form>
        </div>

        {/* NOTICE */}
        <div className="bg-yellow-50 rounded-lg p-6 ring-1 ring-black ring-opacity-5 mt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Important Notice
          </h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>• Please ensure all the information provided is accurate.</p>
            <p>• Withdrawals must match your personal details.</p>
            <p>• Changes may require verification.</p>
            <p>• Processing time is typically 24–48 hours.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
