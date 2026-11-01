// Bir video kaydından kısa bir parça keser.
// Kullanım: node kes.js <video dosyası> <başlangıç saniyesi> <süre saniyesi>
// Orijinal dosyaya dokunmaz, yeni bir kopya oluşturur.

const { execFileSync } = require("child_process");
const path = require("path");

const FFMPEG = process.env.FFMPEG_YOLU ||
  "C:\\Users\\PC\\AppData\\Local\\Microsoft\\WinGet\\Packages\\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\\ffmpeg-9.0.2-full_build\\bin\\ffmpeg.exe";

const [girdi, baslangic, sure] = process.argv.slice(2);

if (!girdi || !baslangic || !sure) {
  console.log("Kullanım: node kes.js <video dosyası> <başlangıç saniyesi> <süre saniyesi>");
  process.exit(1);
}

const cikti = path.join(
  __dirname,
  "..",
  "ciktilar",
  `kesik_${baslangic}s_${sure}s_${path.basename(girdi)}`
);

execFileSync(FFMPEG, [
  "-y",
  "-ss", baslangic,
  "-i", girdi,
  "-t", sure,
  "-c", "copy",
  cikti,
], { stdio: "inherit" });

console.log("Hazır:", cikti);
