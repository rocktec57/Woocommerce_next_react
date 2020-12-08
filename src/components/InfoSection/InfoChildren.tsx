import { InfoPlainText, Heading, BtnWrap } from './InfoElements'
import { RedSpan } from '../Utilities/TextElements'
import MainButton from '../MainButton'

interface AboutInfoProps {}

interface IndexInfoProps {}

export const IndexInfoChild: React.FC<IndexInfoProps> = () => {
  const headingScale = 3
  return (
    <>
      <Heading headingScale={headingScale}>
        Masažuotojas<RedSpan> Romanas</RedSpan>
      </Heading>
      <InfoPlainText>
        Sveiki 😊 Mano vardas Romanas ir esu visada pasirengęs padėti žmonėms, kurie kasdieniame
        gyvenime patiria daug streso, įtampos, jaučia fizinį skausmą ir nežino, kaip su tuo kovoti
        ar tiesiog nori atitrūkti nuo darbų ir skirti laiko sau.
      </InfoPlainText>
      <BtnWrap>
        <MainButton label="Plačiau" href="/about" />
        <MainButton label="Susisiek" href="/about" />
      </BtnWrap>
    </>
  )
}

export const AboutInfoChild: React.FC<AboutInfoProps> = () => {
  const headingScale = 1.3
  return (
    <>
      <Heading headingScale={headingScale}>Kodel verta rinktis mane ?</Heading>
      <InfoPlainText>
        Mano tikslas - tvarkyti raumenų disbalansus, fizinį bei stresinį jų nuovargį. Nemeluosiu,
        mano masažai - tai ne poilsio ar relax'o procesas. Mano masažai - tai procedūra, kurioje
        gali tekti šiek tiek pasikankinti vardan to, kad visa likusį laiką - skraidytumėte kaip ant
        sparnų. Neprireiks ir Red Bull. Man svarbus ir malonus mano darbas, todėl esu visada pilnai
        atsidavęs klientui. Todėl neabejotinai darbus atlieku kokybiškai. Ir visa tai vien todėl -
        kad padėčiau Jums. Neslėpsiu - geram masažuotojui pirmiau svarbu klientas, o tik poto –
        atlygis. Kodel? Nes Jūsų geras atsiliepimas savo draugams ir artimisiems, man yra didžiausia
        padėka, kuri generuoja klientus ir augimą savo srityje.
      </InfoPlainText>
    </>
  )
}

export const ServicesInfoChildOne = () => {
  const headingScale = 1.3
  return (
    <div>
      <Heading headingScale={headingScale}>Kodel verta rinktis mane ?</Heading>
      <InfoPlainText>
        Mano tikslas - tvarkyti raumenų disbalansus, fizinį bei stresinį jų nuovargį. Nemeluosiu,
        mano masažai - tai ne poilsio ar relax'o procesas. Mano masažai - tai procedūra, kurioje
        gali tekti šiek tiek pasikankinti vardan to, kad visa likusį laiką - skraidytumėte kaip ant
        sparnų. Neprireiks ir Red Bull. Man svarbus ir malonus mano darbas, todėl esu visada pilnai
        atsidavęs klientui. Todėl neabejotinai darbus atlieku kokybiškai. Ir visa tai vien todėl -
        kad padėčiau Jums. Neslėpsiu - geram masažuotojui pirmiau svarbu klientas, o tik poto –
        atlygis. Kodel? Nes Jūsų geras atsiliepimas savo draugams ir artimisiems, man yra didžiausia
        padėka, kuri generuoja klientus ir augimą savo srityje.
      </InfoPlainText>
    </div>
  )
}

export const ServicesInfoChildTwo = () => {
  const headingScale = 1.3
  return (
    <div>
      <Heading headingScale={headingScale}>Kodel verta rinktis mane ?</Heading>
      <InfoPlainText>
        Mano tikslas - tvarkyti raumenų disbalansus, fizinį bei stresinį jų nuovargį. Nemeluosiu,
        mano masažai - tai ne poilsio ar relax'o procesas. Mano masažai - tai procedūra, kurioje
        gali tekti šiek tiek pasikankinti vardan to, kad visa likusį laiką - skraidytumėte kaip ant
        sparnų. Neprireiks ir Red Bull. Man svarbus ir malonus mano darbas, todėl esu visada pilnai
        atsidavęs klientui. Todėl neabejotinai darbus atlieku kokybiškai. Ir visa tai vien todėl -
        kad padėčiau Jums. Neslėpsiu - geram masažuotojui pirmiau svarbu klientas, o tik poto –
        atlygis. Kodel? Nes Jūsų geras atsiliepimas savo draugams ir artimisiems, man yra didžiausia
        padėka, kuri generuoja klientus ir augimą savo srityje.
      </InfoPlainText>
    </div>
  )
}

export const ServicesInfoChildThree = () => {
  const headingScale = 1.3
  return (
    <div>
      <Heading headingScale={headingScale}>Kodel verta rinktis mane ?</Heading>
      <InfoPlainText>
        Mano tikslas - tvarkyti raumenų disbalansus, fizinį bei stresinį jų nuovargį. Nemeluosiu,
        mano masažai - tai ne poilsio ar relax'o procesas. Mano masažai - tai procedūra, kurioje
        gali tekti šiek tiek pasikankinti vardan to, kad visa likusį laiką - skraidytumėte kaip ant
        sparnų. Neprireiks ir Red Bull.
      </InfoPlainText>
    </div>
  )
}
