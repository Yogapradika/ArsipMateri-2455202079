export async function ambilMateri() {
 try {
   const res = await fetch(`${import.meta.env.VITE_API_URL}/materi`);
   if (!res.ok) {
     throw new Error(`Gagal memuat materi (Status: ${res.status})`);
   }
   return await res.json();
 } catch (error) {
   // Melempar error dengan pesan jelas, termasuk menangani saat jaringan terputus
   throw new Error(error.message || 'Tidak dapat terhubung ke server');
 }
}