import React from 'react';
import styles from "@components/pagesSEO/style.module.scss";
import {RoomModel} from "@myTypes/api/roomsAPI";

interface Props {
    rooms: RoomModel[]
}

const SEOContentRoomsPage: React.FC<Props> = ({rooms}) => {
    return (
        <div className={styles.srr_only}>
            <h1>VIP комнаты кальянной Lava Lounge</h1>
            {rooms.map((room) => {
                return <section key={room.title}>
                    <h2>{room.title}</h2>
                    <p>{room.description}</p>
                    <p>Максимальное колличество человек: {room.max_persons}</p>
                    <h3>Удобства комнаты «{room.title}»</h3>
                    <ul>
                        {room.amenities.map((el, i) => {
                            return <li key={`amenities_${i}`}>{el}</li>
                        })}
                    </ul>
                    <h3>Условия комнаты «{room.title}»</h3>
                    <ul>
                        {room.rules.map((el, i) => {
                            return <li key={`rules_${i}`}>{el}</li>
                        })}
                    </ul>
                </section>
            })}

        </div>
    );
};

export default SEOContentRoomsPage;