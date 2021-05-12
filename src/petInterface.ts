interface IPet {
    id: number,
    user_id:number,
    skin: string,
    state:string,
    health:number,
    hunger:number,
    happiness:number,
    reference_time:string,
    last_scene:string
}

export default IPet;