import { InfoPlainText } from './InfoElements'

interface AboutInfoProps {}

export const AboutInfoChild: React.FC<AboutInfoProps> = () => {
  return (
    <InfoPlainText>
      Mano tikslas - tvarkyti raumenų disbalansus, fizinį bei stresinį jų nuovargį. Nemeluosiu, mano
      masažai - tai ne poilsio ar relax'o procesas. Mano masažai - tai procedūra, kurioje gali tekti
      šiek tiek pasikankinti vardan to, kad visa likusį laiką - skraidytumėte kaip ant sparnų.
      Neprireiks ir Red Bull. Man svarbus ir malonus mano darbas, todėl esu visada pilnai atsidavęs
      klientui. Todėl neabejotinai darbus atlieku kokybiškai. Ir visa tai vien todėl - kad padėčiau
      Jums. Neslėpsiu - geram masažuotojui pirmiau svarbu klientas, o tik poto – atlygis. Kodel? Nes
      Jūsų geras atsiliepimas savo draugams ir artimisiems, man yra didžiausia padėka, kuri
      generuoja klientus ir augimą savo srityje.`,
    </InfoPlainText>
  )
}

interface IndexInfoProps {}

export const IndexInfoChild: React.FC<IndexInfoProps> = () => {
  return (
    <InfoPlainText>
      Sveiki 😊 Mano vardas Romanas ir esu visada pasirengęs padėti žmonėms, kurie kasdieniame
      gyvenime patiria daug streso, įtampos, jaučia fizinį skausmą ir nežino, kaip su tuo kovoti ar
      tiesiog nori atitrūkti nuo darbų ir skirti laiko sau.
    </InfoPlainText>
  )
}
