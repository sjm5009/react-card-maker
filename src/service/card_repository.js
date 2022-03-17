import { getDatabase, ref, remove, set, onValue } from "firebase/database";

class CardRepository {
  constructor(app) {
    this.db = getDatabase(app);
  }

  syncCard(userId, onUpdate) {
    const cardRef = ref(this.db, `${userId}/cards`);
    onValue(cardRef, (snapshot) => {
      const data = snapshot.val();
      data && onUpdate(data);
    });
  }

  saveCard(userId, card) {
    set(ref(this.db, `${userId}/cards/${card.id}`), card);
  }

  deleteCard(userId, cardId) {
    const cardRef = ref(this.db, `${userId}/cards/${cardId}`);
    remove(cardRef);
  }
}

export default CardRepository;
