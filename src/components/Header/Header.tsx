import '@styles/global.css'


interface HeaderProps {
  title: string
  subtitle?: string
}

function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className='header'>
      <h1 className='title'>{title}</h1>
      {subtitle && <p className='subtitle'>{subtitle}</p>}
    </header>
  )
}

export default Header