"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const mots = [
  "Chat", "Pizza", "Dormir", "Pluie", "Laver", "Mariage",
  "Velo", "Téléphone", "Hôpital", "Pigeon", "Vampire", "Fantôme",
  "Fromage", "Anniversaire", "Loup-Garou", "Lune", "Feu", "Engueulade",
  "Balai", "Lanterne", "Crise de nerf", "Mime", "Créature mythique", "Apéro"
];

const codes = [
  "Que des gestes (type mime)", "Que des bruits de bouche", "3 mots maximum",
  "Que des sons d’animaux", "Que en chantant", "En rimes", "Que des onomatopées",
  "Que avec des emojis dessinés", "En dessinant", "Avec des objets autour de toi",
  "Silence 30 sec puis un geste", "À l’envers (fin vers début)", "Comme un prof",
  "Comme un ado blasé", "Comme un pirate", "Comme un enfant de 5 ans",
  "En langue imaginaire", "En sifflant (si tu peux)"
];

const styles = [
  "Tu es ivre", "Tu es un robot", "Tu es amoureux", "Tu es pressé par le temps",
  "Tu es super content", "Tu es triste", "Tu es en colère", "Tu es une star",
  "Tu es un vendeur TV", "Tu es très timide", "Tu es au bord de la crise de nerfs",
  "Tu es un chat", "Tu es un ogre", "Tu es au théâtre", "Tu fais tout au ralenti",
  "Tu ne veux pas qu'on te comprenne", "Tu es une crêpe", "Tu es en pleine compétition"
];

function randomPick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

export default function CryptoblablaApp() {
  const [mot, setMot] = useState("?");
  const [code, setCode] = useState("?");
  const [style, setStyle] = useState("?");

  const piocher = () => {
    setMot(randomPick(mots));
    setCode(randomPick(codes));
    setStyle(randomPick(styles));
  };

  return (
    <div className="p-6 space-y-6 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold">🎭 Cryptoblabla</h1>
      <p className="text-muted-foreground">Fais deviner le mot en respectant le code et le style !</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-yellow-100 border-yellow-500">
          <CardContent className="py-6">
            <p className="text-sm font-medium">Mot à faire deviner</p>
            <p className="text-xl font-bold mt-2">{mot}</p>
          </CardContent>
        </Card>

        <Card className="bg-blue-100 border-blue-500">
          <CardContent className="py-6">
            <p className="text-sm font-medium">Code de communication</p>
            <p className="text-base font-bold mt-2">{code}</p>
          </CardContent>
        </Card>

        <Card className="bg-red-100 border-red-500">
          <CardContent className="py-6">
            <p className="text-sm font-medium">Style imposé</p>
            <p className="text-base font-bold mt-2">{style}</p>
          </CardContent>
        </Card>
      </div>

      <Button onClick={piocher}>🔁 Piocher une combinaison</Button>
    </div>
  );
}
