function MenuButton({
  color = 'dark'
}) {
  return (
    <div className="block md:hidden">
      <button className="menu-trigger group mx-4" onClick={() => console.log('Apro il menu')}>
        <span className={`block h-[2px] w-[28px] ${ color === 'white' ? 'bg-white' : 'bg-dark'} opacity-50 group-hover:opacity-100 my-1 mx-auto rounded-full`}></span>
        <span className={`block h-[2px] w-[28px] ${ color === 'white' ? 'bg-white' : 'bg-dark'} opacity-50 group-hover:opacity-100 my-1 mx-auto rounded-full`}></span>
        <span className={`block h-[2px] w-[28px] ${ color === 'white' ? 'bg-white' : 'bg-dark'} opacity-50 group-hover:opacity-100 my-1 mx-auto rounded-full`}></span>
      </button>

      {/* { isOverlayMenuVisible && (
        <OverlayMenu
          menu={menu}
          closeOverlay={() => dispatch(updateOverlayMenuVisibility(false))}
        />
      )} */}
    </div>
  )
}

export default MenuButton
