import React, { useState } from 'react';
import './Second.css';

function Second() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    prénom: '',
    numéro: '',
    date: '',
    time: '',
    personnes: '1',
    service: 'soins du visage'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date();
    const selectedDate = new Date(formData.date);
    
    if (selectedDate < today) {
      alert("La date de réservation ne peut pas être dans le passé");
      return;
    }
    
    // Soumission du formulaire via FormSubmit
    const form = e.target;
    form.submit();
    
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="confirmation-message">
        <h2>Merci pour votre réservation!</h2>
        <p>Votre demande de rendez-vous pour le {formData.date} à {formData.time} a bien été enregistrée.</p>
        <p>Nous vous contacterons bientôt pour confirmation.</p>
        <button onClick={() => setIsSubmitted(false)}>Faire une nouvelle réservation</button>
      </div>
    );
  }

  return(
    <div className='second_main'>
      <h2 className="form-title">Réservation SpaOnline</h2>
      <form 
        onSubmit={handleSubmit} 
        action="https://formsubmit.co/fr0055970@gmail.com" 
        method="POST"
      >
        {/* Ajoutez un input caché pour le sujet de l'email */}
        <input type="hidden" name="_subject" value="Nouvelle réservation SpaOnline" />
        
        {/* Ajoutez une redirection après soumission si nécessaire */}
        <input type="hidden" name="_next" value="http://votresite.com/merci" />
        
        <input 
          type='text' 
          placeholder='Entrez votre nom' 
          name='nom' 
          className='second_input' 
          value={formData.nom}
          onChange={handleChange}
          required 
        />
        <input 
          type='text' 
          placeholder='Entrez votre prénom' 
          name='prénom' 
          className='second_input' 
          value={formData.prénom}
          onChange={handleChange}
          required 
        />
        <input 
          type='tel' 
          placeholder='Entrez votre numéro de telephone' 
          name='numéro' 
          className='second_input' 
          value={formData.numéro}
          onChange={handleChange}
          required 
        />
        <input 
          type='date' 
          placeholder='Quand voulez-vous ?' 
          name='date' 
          className='second_input' 
          value={formData.date}
          onChange={handleChange}
          min={new Date().toISOString().split('T')[0]}
          required 
        />
        <input 
          type='time' 
          placeholder='Pour quelle heure ?' 
          name='time' 
          className='second_input' 
          value={formData.time}
          onChange={handleChange}
          required 
        />

        <select 
          className='select_input' 
          name="personnes"
          value={formData.personnes}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Pour combien de personnes ?</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <select 
          className='select_input' 
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Pour quel type de service ?</option>
          <option value="soins du visage">Soins du visage</option>
          <option value="soins du corps">Soins du corps</option>
          <option value="soins des mains et pieds">Soins des mains et pieds</option>
          <option value="soins capillaires">Soins capillaires</option>
          <option value="soins esthétiques">Soins esthétiques</option>
        </select>
        
        <button type="submit" className="submit-btn">Réserver</button>
      </form>
    </div>
  );
}

export default Second;