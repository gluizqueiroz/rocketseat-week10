import React, { useState, useEffect } from 'react';

function DevForm(props) {
    const { onSubmit }= props;

    const [github_username, setGithubUsername] = useState('');
	const [techs, setTechs] = useState('');
	const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    
    //navigator.geolocation.getCurrentPosition(); //Se colocar a função desse jeito, toda vez que o App() tiver o estado alterado, vai executar essa função
	useEffect(
		() => {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;

					setLatitude(latitude);
					setLongitude(longitude);
				},
				(err) => {
					console.log(err);
				},
				{
					timeout: 30000
				}
			);
		}, 
		[] /* Se colocar uma variavel dentro, toda vez que a variavel tiver o valor alterado, vai executar a função */
    ); //useEffect recebe 2 parametros. 1° parametro: Função que ele precisa executar. 2° parametro: Quando precisa executar
    
    async function handleSubmit(e) {
        e.preventDefault();
        
        await onSubmit({
			github_username,
			techs,
			latitude,
			longitude
        });
        
        setGithubUsername('');
		setTechs('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="github_username">Usuário do Github</label>
                <input name="github_username" id="github_username" required value={github_username} onChange={e => setGithubUsername(e.target.value)} />
            </div>

            <div className="input-block">
                <label htmlFor="techs">Tecnologias</label>
                <input name="techs" id="techs" required value={techs} onChange={e => setTechs(e.target.value)} />
            </div>
            
            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="latitude">Latitude</label>
                    <input type="number" name="latitude" id="latitude" required value={latitude} onChange={e => setLatitude(e.target.value)} />
                </div>

                <div className="input-block">
                    <label htmlFor="longitude">Longitude</label>
                    <input type="number" name="longitude" id="longitude" required value={longitude} onChange={e => setLongitude(e.target.value)} />
                </div>
            </div>

            <button type="submit">Salvar</button>
        </form>
    )
}

export default DevForm;