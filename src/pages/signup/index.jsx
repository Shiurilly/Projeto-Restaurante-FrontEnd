import Head from 'next/head'
import styles from '../../../styles/home.module.scss'

import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'

import Link from 'next/link'

export default function SingUp() {
  return (
    <>
    <Head>
      <title>Faça seu cadastro</title> 
    </Head>
    <div className={styles.containerCenter}>

      <div className={styles.login}>
        <h1> Crie sua conta </h1>
        <form>
          <Input
            placeholder="Digite seu nome"
            type="text"
          />

          <Input
            placeholder="Digite seu email"
            type="text"
          />

          <Input
            placeholder="Digite sua senha"
            type="password"
          />
          
          <Button
            type="submit"
            loading={false}
          >
            Cadastrar
          </Button>

        </form>

        <Link href="/" legacyBehavior>
          <a className={styles.text}> Já possui uma conta? Faça o Login! </a>
        </Link>

      </div>
    </div>
    </>
  )
}
