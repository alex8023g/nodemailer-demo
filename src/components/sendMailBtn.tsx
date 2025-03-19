'use client';
export function SendMailBtn() {
  return (
    <button
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      onClick={async () => {
        const response = await fetch('/api/sendmail', { method: 'GET' });
        console.log(await response.json());
      }}
    >
      Send Mail
    </button>
  );
}
