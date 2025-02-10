
import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { getFirestore, collection, addDoc, query, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import '../styles/blogStyles/Comments.css';

const auth = getAuth();
const db = getFirestore();

export default function CommentsSection() {
    const [user, setUser] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState('');

    useEffect(() => {
        // Obtener usuario autenticado
        auth.onAuthStateChanged(setUser);
        
        // Cargar comentarios en tiempo real
        const q = query(collection(db, 'comments'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setComments(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });

        return () => unsubscribe();
    }, []);

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error('Error al iniciar sesión con Google:', error);
        }
    };

    const handleFacebookLogin = async () => {
        const provider = new FacebookAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error('Error al iniciar sesión con Facebook:', error);
        }
    };

    const handleAddComment = async () => {
        if (!newComment.trim()) return;
        
        await addDoc(collection(db, 'comments'), {
            text: newComment,
            userId: user.uid,
            username: user.displayName || 'Usuario',
            timestamp: new Date()
        });

        setNewComment('');
    };

    const handleEditComment = async (id) => {
        await updateDoc(doc(db, 'comments', id), { text: editingText });
        setEditingId(null);
    };

    const handleDeleteComment = async (id, commentUserId) => {
        if (user.uid === commentUserId || user.email === 'admin@gmail.com') {
            await deleteDoc(doc(db, 'comments', id));
        }
    };

    return (
        <div className="comments-container">
            <h2>Comentarios</h2>
            {user ? (
                <>
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Escribe un comentario..."
                    />
                    <button onClick={handleAddComment}>Publicar</button>
                </>
            ) : (
                <div>
                    <p>Inicia sesión para comentar:</p>
                    <button onClick={handleGoogleLogin}>Iniciar con Google</button>
                    <button onClick={handleFacebookLogin}>Iniciar con Facebook</button>
                </div>
            )}
            
            <div className="comments-list">
                {comments.map(comment => (
                    <div key={comment.id} className="comment-item">
                        <p><strong>{comment.username}</strong>: {editingId === comment.id ? (
                            <>
                                <input
                                    value={editingText}
                                    onChange={(e) => setEditingText(e.target.value)}
                                />
                                <button onClick={() => handleEditComment(comment.id)}>Guardar</button>
                            </>
                        ) : (
                            comment.text
                        )}</p>
                        {user && user.uid === comment.userId && (
                            <button onClick={() => { setEditingId(comment.id); setEditingText(comment.text); }}>Editar</button>
                        )}
                        {user && (user.uid === comment.userId || user.email === 'admin@gmail.com') && (
                            <button onClick={() => handleDeleteComment(comment.id, comment.userId)}>Eliminar</button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
