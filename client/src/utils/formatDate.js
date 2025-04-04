export const formatDate = (input) =>{
    const date = new Date(Number(input));
    const formatDate = date.toLocaleDateString('en-GB',{
        weekday:'short',
        year:'numeric',
        month:'short',
        day:'numeric'
    })

    return formatDate;
}