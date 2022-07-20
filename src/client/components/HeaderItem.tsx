function HeaderItem({ title, Icon, click }) {
    return (
        <div className="flex flex-col items-center cursor-pointer w-12 group sm:w-20 hover:text-white" onClick={click}>
            <Icon className="h-8 mb-1 group-hover:animate-bounce" />
            <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
        </div>
    )
}

export default HeaderItem