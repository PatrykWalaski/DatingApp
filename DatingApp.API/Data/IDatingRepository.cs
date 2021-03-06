using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp.API.Dtos;
using DatingApp.API.Helpers;
using DatingApp.API.Models;

namespace DatingApp.API.Data
{
    public interface IDatingRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<PagedList<User>> GetUsers(UserParams userParams);
        Task<User> GetUser(int id);
        Task<Photo> GetPhoto(int id);
        Task<Like> GetLike(int userId, int recipientId);
        Task<User> GetUserWithPhotos(int id);
        Task<string> GetMainPhotoUrl(int id);
        Task<string> GetUserKnownAs(int id);
        Task<Message> GetMessage(int id); //message id - gets single message from database
        Task<PagedList<Message>> GetMessagesForUser(MessageParams messageParams);
        Task<IEnumerable<Message>> GetMessageThread(int userId, int recipientId); // conversation between two users that we display

    }
}