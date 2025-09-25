# Decap CMS Integration

Decap CMS has been successfully integrated into your StringSoft website to manage blog posts.

## Accessing Decap CMS

1. **Admin Interface**: Visit `/admin` on your website (e.g., `http://localhost:3000/admin` for local development)

2. **Authentication**: The CMS uses DecapBridge authentication with the following configuration:
   - Identity URL: `https://auth.decapbridge.com/sites/fb39badc-ea5b-4e64-9663-c11ce7b658e9`
   - Gateway URL: `https://gateway.decapbridge.com`
   - Repository: `marketingcar/stringsoft`

## Blog Management

### Existing Blog Posts
Your existing blog posts have been converted to Markdown files located in:
- `src/content/blog/streamlining-your-clinic-workflow.md`
- `src/content/blog/ai-in-veterinary-medicine.md`
- `src/content/blog/improving-client-communication.md`

### Creating New Blog Posts
1. Access the admin interface at `/admin`
2. Login using your GitHub/DecapBridge credentials
3. Click "New Blog" to create a new post
4. Fill out the required fields:
   - Title
   - Slug (URL-friendly version)
   - Excerpt
   - Category (Efficiency, Technology, Practice Growth, Client Care, Industry News)
   - Date
   - Image Description
   - Body content (Markdown supported)

### Editing Existing Posts
1. In the admin interface, browse to the Blog collection
2. Click on any existing post to edit
3. Make your changes and save

## File Structure

```
public/
├── admin/
│   ├── index.html          # Decap CMS interface
│   └── config.yml          # CMS configuration
└── images/
    └── uploads/            # Media uploads folder

src/
├── content/
│   └── blog/              # Blog post Markdown files
├── utils/
│   └── blogLoader.js      # Blog post loading utility
└── data/
    └── blogPosts.js       # Legacy blog data (for compatibility)
```

## Notes

- The current implementation uses a compatibility layer (`src/utils/blogLoader.js`) that reads from the existing JavaScript data structure
- For a full markdown-based implementation, you would need to set up a build-time process to parse markdown files
- Consider using tools like Vite plugins for markdown processing in production
- All commits made through Decap CMS will include attribution in the commit messages

## Security

- Authentication is handled through DecapBridge
- All changes go through Git, providing version control and audit trails
- Users need appropriate GitHub repository access to make changes