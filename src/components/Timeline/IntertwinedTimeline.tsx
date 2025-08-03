// pages/ExperiencePage.tsx

import { observer } from 'mobx-react-lite';
import { languageStore } from '../../store/language-store.tsx';
import { FiAward, FiBookOpen } from 'react-icons/fi';
import './Timeline.css'; // Переконайтесь, що стилі імпортуються

// 1. Обгортаємо компонент в `observer`
const ExperiencePage = observer(() => {
    // 2. Видаляємо локальний `experienceData`, він тепер у сторі.

    return (
        <div className="experience-page">
            {/* Також робимо заголовок динамічним */}
            <div className="experience-grid">
                {/* 3. Використовуємо `languageStore.experienceData` для ітерації */}
                {languageStore.experienceData.map((item, index) => (
                    <div className="experience-card" key={index}>
                        <div className="card-header">
                            <span className="card-type">{item.type}</span>
                            <span className="card-date">{item.date}</span>
                        </div>
                        <h3 className="card-title">{item.title}</h3>
                        <h4 className="card-subtitle">{item.subtitle}</h4>
                        <p className="card-description">{item.description}</p>
                        {item.link && (
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="certificate-link">
                                {item.linkText?.includes("диплом") || item.linkText?.includes("Diploma")
                                    ? <FiBookOpen />
                                    : <FiAward />
                                }
                                {item.linkText}
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
});

export default ExperiencePage;