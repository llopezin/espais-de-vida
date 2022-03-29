import React from 'react'
import BasicPageLayout from '../templates/BasicPageLayout'
import SobreMi from '../components/organisms/SobreMi/SobreMi'
import Head from '../components/atoms/Head/Head'

const about = () => {
  return (
    <>
      <Head
        title='Sobre mi'
        description='Soy especialista en saber escuchar, entender y empatizar con las necesidades de cada persona y me comprometo a encontrarte el espacio que necesitas para vivir. Investigo, estudio y rastreo todos los inmuebles de la Ciudad de València y Jávea.'
      />
      <BasicPageLayout>
        <SobreMi />
      </BasicPageLayout>
    </>
  )
}

export default about
