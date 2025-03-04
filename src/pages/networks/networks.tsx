import { Header } from "../../components/header/header";
import { Input } from "../../components/input/input";
import { FormEvent, useState, useEffect } from "react";
import { db } from "../../services/firebaseConnection";
import { setDoc, doc, getDoc } from "firebase/firestore";

export function Networks() {
  const [facebook, setFacebook] = useState(localStorage.getItem('facebook') || "");
  const [instagram, setInstagram] = useState(localStorage.getItem('instagram') || "");
  const [youtube, setYoutube] = useState(localStorage.getItem('youtube') || "");

  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, "social", "link");
      getDoc(docRef)
        .then((snapshot) => {
          if (snapshot.data() !== undefined) {
            setFacebook(snapshot.data()?.facebook);
            setInstagram(snapshot.data()?.instagram);
            setYoutube(snapshot.data()?.youtube);
            localStorage.setItem('facebook', snapshot.data()?.facebook || '');
            localStorage.setItem('instagram', snapshot.data()?.instagram || '');
            localStorage.setItem('youtube', snapshot.data()?.youtube || '');
          }
        })
        .catch((error) => {
          console.log("Erro ao carregar" + error);
        });
    }
    loadLinks();
  }, []);

  function handleRegister(e: FormEvent) {
    e.preventDefault();

    setDoc(doc(db, "social", "redesocial"), {
      facebook: facebook,
      instagram: instagram,
      youtube: youtube,
    })
      .then(() => {
        console.log("Cadastrados com sucesso");
        localStorage.setItem('facebook', facebook);
        localStorage.setItem('instagram', instagram);
        localStorage.setItem('youtube', youtube);
      })
      .catch((error) => {
        console.log("Erro ao Salvar" + error);
      });
  }

  return (
    <div className="flex flex-col items-center min-h-screen pb-7 px-2">
      <Header />
      <h1 className="text-white text-2xl font-medium mt-8 mb-4">
        Minhas Redes Sociais
      </h1>

      <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
        <label className="text-white font-medium mt-2 mb-2">
          Link Facebook
        </label>
        <Input
          type="url"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
          placeholder="Digite a url do Facebook..."
        />
        <label className="text-white font-medium mt-2 mb-2">
          Link Instagram
        </label>
        <Input
          type="url"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
          placeholder="Digite a url do Instagram..."
        />
        <label className="text-white font-medium mt-2 mb-2">Link Youtube</label>
        <Input
          type="url"
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
          placeholder="Digite a url do Youtube..."
        />

        <button
          type="submit"
          className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium cursor-pointer"
        >
          Salvar Links
        </button>
      </form>
    </div>
  );
}

export default Networks;
