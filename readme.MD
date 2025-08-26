# 🚀 Sync Pad

**Real-time Collaborative Text Editor** - Experience seamless collaboration with live editing, instant synchronization, and beautiful rich-text formatting.

Sync Pad enables multiple users to edit documents simultaneously with real-time updates, conflict-free synchronization using CRDTs, and live cursor tracking. Built with modern web technologies for optimal performance and user experience.

![Demo](demo.gif)

## ✨ Key Features

- **🔄 Real-time Collaboration** - Multiple users can edit simultaneously with instant synchronization
- **👥 Live Cursors & Awareness** - See other users' cursors and selections in real-time
- **📝 Rich Text Editing** - Full formatting support including bold, italic, headings, lists, and more
- **⚡ Conflict-Free** - Uses Yjs CRDTs to automatically resolve editing conflicts
- **🎨 Modern UI** - Beautiful, responsive interface with smooth animations
- **🔒 Secure** - Built with Django backend and proper WebSocket security
- **📱 Responsive** - Works seamlessly on desktop, tablet, and mobile devices

## 🛠️ Tech Stack

### Backend
- **Django 4.1** - Robust web framework
- **Django Channels** - WebSocket support for real-time communication
- **Redis** - Channel layer for WebSocket message routing
- **Daphne** - ASGI server for handling WebSocket connections

### Frontend
- **React 18** - Modern UI library
- **Vite** - Lightning-fast development and build tool
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Remirror** - Extensible rich-text editor
- **Yjs** - Shared data types for real-time collaboration

## 🚀 Quick Start

### Prerequisites
- Python 3.10+
- Node.js 16+
- Docker (for Redis)

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/sync-pad.git
cd sync-pad
```

### 2. Backend Setup
```bash
# Create and activate virtual environment
python -m venv .venv
source ./.venv/Scripts/activate  # Windows Git Bash
# source ./.venv/bin/activate     # Linux/Mac

# Install dependencies
pip install -r app-server/requirements.txt
pip install channels-redis==4.0.0

# Create environment file
echo "SECRET_KEY=$(python -c 'import secrets; print(secrets.token_urlsafe(50))')" > app-server/.env

# Run database migrations
python app-server/manage.py makemigrations
python app-server/manage.py migrate

# Start Redis (using Docker)
docker run -p 6379:6379 -d --name redis redis:5

# Start Django server
python app-server/manage.py runserver
```

### 3. Frontend Setup
```bash
# In a new terminal, navigate to frontend directory
cd app

# Install dependencies
npm install

# Start development server
npm run dev
```

### 4. Open the Application
Visit `http://localhost:5173` in your browser and start collaborating!

## 📖 Usage

1. **Enter Your Name** - Start by entering your display name
2. **Start Typing** - Begin editing in the rich-text editor
3. **Invite Others** - Share the URL with collaborators
4. **Real-time Magic** - Watch as changes appear instantly across all connected users

## 🎯 Roadmap

- [ ] **Multiple Documents** - Support for creating and managing multiple documents
- [ ] **User Authentication** - Secure user accounts and document permissions
- [ ] **Document History** - Version control and change tracking
- [ ] **Export Options** - Export to PDF, Word, Markdown formats
- [ ] **Comments & Suggestions** - Collaborative review features
- [ ] **WebRTC Integration** - Peer-to-peer communication for reduced latency
- [ ] **Mobile App** - Native mobile applications
- [ ] **Offline Support** - Work offline with automatic sync when reconnected

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Yjs** - For the amazing CRDT implementation
- **Remirror** - For the powerful rich-text editor framework
- **Django Channels** - For real-time WebSocket support
- **Tailwind CSS** - For the beautiful styling system

## 📧 Contact

For questions, suggestions, or support, please open an issue on GitHub.

---

**Built with ❤️ for seamless collaboration**
