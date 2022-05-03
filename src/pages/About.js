import React from 'react';
import Logo from '../components/Logo';
import Card from '../components/Card';
import Navigation from '../components/Navigation';
import Map from '../components/Map';

const About = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1>A Propos</h1>
            <br />
            <div className="cardRow">
                <Card text={`Vous rencontrez des difficultés avec votre chiot ou votre chien adulte, ou vous souhaitez simplement lui proposer une activité complémentaire ?
                    Venez découvrir notre centre d’éducation Éduc'ton poilu, situé à Daumazan sur Arize en Ariège. Nous travaillons avec toutes races de chiens mais nous sommes également spécialiste du chien nordique.
                    Notre terrain de 1500m2 entièrement clôturés et sécurisé, vous accueille pour de multiples activités canines.
                    Carole BRUNEAU, éducateur canin diplômée d'état, vous accueille 7/7 jours et vous proposent des activités variées pour vous aider à toujours mieux vivre avec votre chien adulte ou votre chiot !`}/>

                <Card text={`Nous travaillons avec toutes races de chien : Labrador, Boxer, Beagle, Bulldog Anglais, Dogue Allemand, Caniche, Husky, Border Collie, Braque Allemand, Berger Australien, European Sledog, Greyster, Malamute, etc.`} />

                <Card text={`Que votre chien soit adulte ou qu’il s’agisse d’un chiot nous travaillons avec des chiens de tous âges. Découvrez notre École du petit poilu à partir de l’âge de 2 mois.
                A partir de septembre 2018, tous les samedis ou dimanches matin de 10h30 à 12h, des séances autour du chiot avec des jeux et des agrés afin de jouer et se sociabiliser.
                Plusieurs ateliers : 2 à 4 mois, 4 à 6 mois et 6 à 8 mois.`} />
            </div>

            <div className="cardRow">
                <Card text={`Je m’appelle Carole BRUNEAU et je suis passionnée par mon métier !
                Ma p’tite meute de Husky et mes borders me font vivre un bonheur au quotidien.
                Je suis  diplômée d’État, formée aux premiers secours canins :
                - Attestation Niveau 1 et Niveau 2,
                - Intervenant PECCRAM (Programme d’Education à la Connaissance du Chien et aux Risques d’Accident par Morsures),
                - et bientôt comportementaliste canin (en formation). Je suis également présidente de deux clubs de sports canins.
                Les Canirider’s Ariège-Pyrénées (sport mono chien) et du CPSTC (Club Pyrénéen des sports de Traineau à chiens),
                sport d’attelage d’ou ma spécialité dans le chien nordique.`} />
            
                <Card text={`Possédant plusieurs Huskys, 2 Borders Collies et 1 European Sledog au centre d’éducation,
                et pratiquant le sport de traineau à chiens, nous sommes des spécialistes du chien nordique.
                N’hésitez plus pour nous confier votre Husky, Malamute, Samoyède, Groenlandais ou l’Alaskan !`} />
            </div>
            
            <Map />
        </div>
    );
};
    
export default About;