"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@auth";
exports.ids = ["vendor-chunks/@auth"];
exports.modules = {

/***/ "(rsc)/./node_modules/@auth/prisma-adapter/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@auth/prisma-adapter/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PrismaAdapter: () => (/* binding */ PrismaAdapter)\n/* harmony export */ });\n/**\n * ## Setup\n *\n * Add this adapter to your `auth.ts` Auth.js configuration object:\n *\n * ```js title=\"auth.ts\"\n * import NextAuth from \"next-auth\"\n * import Google from \"next-auth/providers/google\"\n * import { PrismaAdapter } from \"@auth/prisma-adapter\"\n * import { PrismaClient } from \"@prisma/client\"\n *\n * const prisma = new PrismaClient()\n *\n * export const { handlers, auth, signIn, signOut } = NextAuth({\n *   adapter: PrismaAdapter(prisma),\n *   providers: [\n *     Google,\n *   ],\n * })\n * ```\n *\n * ### Create the Prisma schema from scratch\n *\n * You need to use at least Prisma 2.26.0. Create a schema file in `prisma/schema.prisma` similar to this one:\n *\n * > This schema is adapted for use in Prisma and based upon our main [schema](https://authjs.dev/reference/core/adapters#models)\n *\n * ```json title=\"schema.prisma\"\n * datasource db {\n *   provider = \"postgresql\"\n *   url      = env(\"DATABASE_URL\")\n *   shadowDatabaseUrl = env(\"SHADOW_DATABASE_URL\") // Only needed when using a cloud provider that doesn't support the creation of new databases, like Heroku. Learn more: https://pris.ly/d/migrate-shadow\n * }\n *\n * generator client {\n *   provider        = \"prisma-client-js\"\n *   previewFeatures = [\"referentialActions\"] // You won't need this in Prisma 3.X or higher.\n * }\n *\n * model Account {\n *   id                 String  @id @default(cuid())\n *   userId             String\n *   type               String\n *   provider           String\n *   providerAccountId  String\n *   refresh_token      String?  @db.Text\n *   access_token       String?  @db.Text\n *   expires_at         Int?\n *   token_type         String?\n *   scope              String?\n *   id_token           String?  @db.Text\n *   session_state      String?\n *\n *   user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n *\n *   @@unique([provider, providerAccountId])\n * }\n *\n * model Session {\n *   id           String   @id @default(cuid())\n *   sessionToken String   @unique\n *   userId       String\n *   expires      DateTime\n *   user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n * }\n *\n * model User {\n *   id            String    @id @default(cuid())\n *   name          String?\n *   email         String?   @unique\n *   emailVerified DateTime?\n *   image         String?\n *   accounts      Account[]\n *   sessions      Session[]\n * }\n *\n * model VerificationToken {\n *   identifier String\n *   token      String   @unique\n *   expires    DateTime\n *\n *   @@unique([identifier, token])\n * }\n * ```\n *\n * :::note\n * When using the MySQL connector for Prisma, the [Prisma `String` type](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#string) gets mapped to `varchar(191)` which may not be long enough to store fields such as `id_token` in the `Account` model. This can be avoided by explicitly using the `Text` type with `@db.Text`.\n * :::\n *\n *\n * ### Create the Prisma schema with `prisma migrate`\n *\n * This will create an SQL migration file and execute it:\n *\n * ```\n * npx prisma migrate dev\n * ```\n *\n * Note that you will need to specify your database connection string in the environment variable `DATABASE_URL`. You can do this by setting it in a `.env` file at the root of your project.\n *\n * To learn more about [Prisma Migrate](https://www.prisma.io/migrate), check out the [Migrate docs](https://www.prisma.io/docs/concepts/components/prisma-migrate).\n *\n * ### Generating the Prisma Client\n *\n * Once you have saved your schema, use the Prisma CLI to generate the Prisma Client:\n *\n * ```\n * npx prisma generate\n * ```\n *\n * To configure your database to use the new schema (i.e. create tables and columns) use the `prisma migrate` command:\n *\n * ```\n * npx prisma migrate dev\n * ```\n *\n * ### MongoDB support\n *\n * Prisma supports MongoDB, and so does Auth.js. Following the instructions of the [Prisma documentation](https://www.prisma.io/docs/concepts/database-connectors/mongodb) on the MongoDB connector, things you have to change are:\n *\n * 1. Make sure that the id fields are mapped correctly\n *\n * ```prisma\n * id  String  @id @default(auto()) @map(\"_id\") @db.ObjectId\n * ```\n *\n * 2. The Native database type attribute to `@db.String` from `@db.Text` and userId to `@db.ObjectId`.\n *\n * ```prisma\n * user_id            String   @db.ObjectId\n * refresh_token      String?  @db.String\n * access_token       String?  @db.String\n * id_token           String?  @db.String\n * ```\n *\n * Everything else should be the same.\n *\n * ### Naming Conventions\n *\n * If mixed snake_case and camelCase column names is an issue for you and/or your underlying database system, we recommend using Prisma's `@map()`([see the documentation here](https://www.prisma.io/docs/concepts/components/prisma-schema/names-in-underlying-database)) feature to change the field names. This won't affect Auth.js, but will allow you to customize the column names to whichever naming convention you wish.\n *\n * For example, moving to `snake_case` and plural table names.\n *\n * ```json title=\"schema.prisma\"\n * model Account {\n *   id                 String  @id @default(cuid())\n *   userId             String  @map(\"user_id\")\n *   type               String\n *   provider           String\n *   providerAccountId  String  @map(\"provider_account_id\")\n *   refresh_token      String? @db.Text\n *   access_token       String? @db.Text\n *   expires_at         Int?\n *   token_type         String?\n *   scope              String?\n *   id_token           String? @db.Text\n *   session_state      String?\n *\n *   user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n *\n *   @@unique([provider, providerAccountId])\n *   @@map(\"accounts\")\n * }\n *\n * model Session {\n *   id           String   @id @default(cuid())\n *   sessionToken String   @unique @map(\"session_token\")\n *   userId       String   @map(\"user_id\")\n *   expires      DateTime\n *   user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n *\n *   @@map(\"sessions\")\n * }\n *\n * model User {\n *   id             String    @id @default(cuid())\n *   name           String?\n *   email          String?   @unique\n *   emailVerified  DateTime? @map(\"email_verified\")\n *   image          String?\n *   accounts       Account[]\n *   sessions       Session[]\n *   authenticators Authenticator[]\n *\n *   @@map(\"users\")\n * }\n *\n * model VerificationToken {\n *   identifier String\n *   token      String   @unique\n *   expires    DateTime\n *\n *   @@unique([identifier, token])\n *   @@map(\"verificationtokens\")\n * }\n *\n * model Authenticator {\n *   id                   String  @id @default(cuid())\n *   credentialID         String  @unique\n *   userId               String\n *   providerAccountId    String\n *   credentialPublicKey  String\n *   counter              Int\n *   credentialDeviceType String\n *   credentialBackedUp   Boolean\n *   transports           String?\n *\n *   user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n * }\n * ```\n *\n **/\nfunction PrismaAdapter(prisma) {\n    const p = prisma;\n    return {\n        // We need to let Prisma generate the ID because our default UUID is incompatible with MongoDB\n        createUser: ({ id: _id, ...data }) => {\n            return p.user.create({ data });\n        },\n        getUser: (id) => p.user.findUnique({ where: { id } }),\n        getUserByEmail: (email) => p.user.findUnique({ where: { email } }),\n        async getUserByAccount(provider_providerAccountId) {\n            const account = await p.account.findUnique({\n                where: { provider_providerAccountId },\n                select: { user: true },\n            });\n            return account?.user ?? null;\n        },\n        updateUser: ({ id, ...data }) => p.user.update({ where: { id }, data }),\n        deleteUser: (id) => p.user.delete({ where: { id } }),\n        linkAccount: (data) => p.account.create({ data }),\n        unlinkAccount: (provider_providerAccountId) => p.account.delete({\n            where: { provider_providerAccountId },\n        }),\n        async getSessionAndUser(sessionToken) {\n            const userAndSession = await p.session.findUnique({\n                where: { sessionToken },\n                include: { user: true },\n            });\n            if (!userAndSession)\n                return null;\n            const { user, ...session } = userAndSession;\n            return { user, session };\n        },\n        createSession: (data) => p.session.create({ data }),\n        updateSession: (data) => p.session.update({ where: { sessionToken: data.sessionToken }, data }),\n        deleteSession: (sessionToken) => p.session.delete({ where: { sessionToken } }),\n        async createVerificationToken(data) {\n            const verificationToken = await p.verificationToken.create({ data });\n            // @ts-expect-errors // MongoDB needs an ID, but we don't\n            if (verificationToken.id)\n                delete verificationToken.id;\n            return verificationToken;\n        },\n        async useVerificationToken(identifier_token) {\n            try {\n                const verificationToken = await p.verificationToken.delete({\n                    where: { identifier_token },\n                });\n                // @ts-expect-errors // MongoDB needs an ID, but we don't\n                if (verificationToken.id)\n                    delete verificationToken.id;\n                return verificationToken;\n            }\n            catch (error) {\n                // If token already used/deleted, just return null\n                // https://www.prisma.io/docs/reference/api-reference/error-reference#p2025\n                if (error.code === \"P2025\")\n                    return null;\n                throw error;\n            }\n        },\n        async getAccount(providerAccountId, provider) {\n            return p.account.findFirst({\n                where: { providerAccountId, provider },\n            });\n        },\n        async createAuthenticator(authenticator) {\n            return p.authenticator\n                .create({\n                data: authenticator,\n            })\n                .then(fromDBAuthenticator);\n        },\n        async getAuthenticator(credentialID) {\n            const authenticator = await p.authenticator.findUnique({\n                where: { credentialID },\n            });\n            return authenticator ? fromDBAuthenticator(authenticator) : null;\n        },\n        async listAuthenticatorsByUserId(userId) {\n            const authenticators = await p.authenticator.findMany({\n                where: { userId },\n            });\n            return authenticators.map(fromDBAuthenticator);\n        },\n        async updateAuthenticatorCounter(credentialID, counter) {\n            return p.authenticator\n                .update({\n                where: { credentialID: credentialID },\n                data: { counter },\n            })\n                .then(fromDBAuthenticator);\n        },\n    };\n}\nfunction fromDBAuthenticator(authenticator) {\n    const { transports, id, user, ...other } = authenticator;\n    return {\n        ...other,\n        transports: transports || undefined,\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQGF1dGgvcHJpc21hLWFkYXB0ZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdCQUFnQjtBQUM1QixZQUFZLGVBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtDQUFrQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QyxtQ0FBbUMsTUFBTTtBQUN6QyxTQUFTO0FBQ1QsNkNBQTZDLFNBQVMsTUFBTTtBQUM1RCx1REFBdUQsU0FBUyxTQUFTO0FBQ3pFO0FBQ0E7QUFDQSx5QkFBeUIsNEJBQTRCO0FBQ3JELDBCQUEwQixZQUFZO0FBQ3RDLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVCx1QkFBdUIsYUFBYSxxQkFBcUIsU0FBUyxJQUFJLFFBQVE7QUFDOUUsNENBQTRDLFNBQVMsTUFBTTtBQUMzRCxrREFBa0QsTUFBTTtBQUN4RDtBQUNBLHFCQUFxQiw0QkFBNEI7QUFDakQsU0FBUztBQUNUO0FBQ0E7QUFDQSx5QkFBeUIsY0FBYztBQUN2QywyQkFBMkIsWUFBWTtBQUN2QyxhQUFhO0FBQ2I7QUFDQTtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkMscUJBQXFCO0FBQ3JCLFNBQVM7QUFDVCxvREFBb0QsTUFBTTtBQUMxRCxvREFBb0QsU0FBUyxpQ0FBaUMsUUFBUTtBQUN0Ryw0REFBNEQsU0FBUyxnQkFBZ0I7QUFDckY7QUFDQSx5RUFBeUUsTUFBTTtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsa0JBQWtCO0FBQy9DLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHlCQUF5Qiw2QkFBNkI7QUFDdEQsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EseUJBQXlCLGNBQWM7QUFDdkMsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx5QkFBeUIsUUFBUTtBQUNqQyxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRCQUE0QjtBQUNyRCx3QkFBd0IsU0FBUztBQUNqQyxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpQ0FBaUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYmxvZy8uL25vZGVfbW9kdWxlcy9AYXV0aC9wcmlzbWEtYWRhcHRlci9pbmRleC5qcz8zZTRmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogIyMgU2V0dXBcbiAqXG4gKiBBZGQgdGhpcyBhZGFwdGVyIHRvIHlvdXIgYGF1dGgudHNgIEF1dGguanMgY29uZmlndXJhdGlvbiBvYmplY3Q6XG4gKlxuICogYGBganMgdGl0bGU9XCJhdXRoLnRzXCJcbiAqIGltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcbiAqIGltcG9ydCBHb29nbGUgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCJcbiAqIGltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tIFwiQGF1dGgvcHJpc21hLWFkYXB0ZXJcIlxuICogaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcbiAqXG4gKiBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbiAqXG4gKiBleHBvcnQgY29uc3QgeyBoYW5kbGVycywgYXV0aCwgc2lnbkluLCBzaWduT3V0IH0gPSBOZXh0QXV0aCh7XG4gKiAgIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcbiAqICAgcHJvdmlkZXJzOiBbXG4gKiAgICAgR29vZ2xlLFxuICogICBdLFxuICogfSlcbiAqIGBgYFxuICpcbiAqICMjIyBDcmVhdGUgdGhlIFByaXNtYSBzY2hlbWEgZnJvbSBzY3JhdGNoXG4gKlxuICogWW91IG5lZWQgdG8gdXNlIGF0IGxlYXN0IFByaXNtYSAyLjI2LjAuIENyZWF0ZSBhIHNjaGVtYSBmaWxlIGluIGBwcmlzbWEvc2NoZW1hLnByaXNtYWAgc2ltaWxhciB0byB0aGlzIG9uZTpcbiAqXG4gKiA+IFRoaXMgc2NoZW1hIGlzIGFkYXB0ZWQgZm9yIHVzZSBpbiBQcmlzbWEgYW5kIGJhc2VkIHVwb24gb3VyIG1haW4gW3NjaGVtYV0oaHR0cHM6Ly9hdXRoanMuZGV2L3JlZmVyZW5jZS9jb3JlL2FkYXB0ZXJzI21vZGVscylcbiAqXG4gKiBgYGBqc29uIHRpdGxlPVwic2NoZW1hLnByaXNtYVwiXG4gKiBkYXRhc291cmNlIGRiIHtcbiAqICAgcHJvdmlkZXIgPSBcInBvc3RncmVzcWxcIlxuICogICB1cmwgICAgICA9IGVudihcIkRBVEFCQVNFX1VSTFwiKVxuICogICBzaGFkb3dEYXRhYmFzZVVybCA9IGVudihcIlNIQURPV19EQVRBQkFTRV9VUkxcIikgLy8gT25seSBuZWVkZWQgd2hlbiB1c2luZyBhIGNsb3VkIHByb3ZpZGVyIHRoYXQgZG9lc24ndCBzdXBwb3J0IHRoZSBjcmVhdGlvbiBvZiBuZXcgZGF0YWJhc2VzLCBsaWtlIEhlcm9rdS4gTGVhcm4gbW9yZTogaHR0cHM6Ly9wcmlzLmx5L2QvbWlncmF0ZS1zaGFkb3dcbiAqIH1cbiAqXG4gKiBnZW5lcmF0b3IgY2xpZW50IHtcbiAqICAgcHJvdmlkZXIgICAgICAgID0gXCJwcmlzbWEtY2xpZW50LWpzXCJcbiAqICAgcHJldmlld0ZlYXR1cmVzID0gW1wicmVmZXJlbnRpYWxBY3Rpb25zXCJdIC8vIFlvdSB3b24ndCBuZWVkIHRoaXMgaW4gUHJpc21hIDMuWCBvciBoaWdoZXIuXG4gKiB9XG4gKlxuICogbW9kZWwgQWNjb3VudCB7XG4gKiAgIGlkICAgICAgICAgICAgICAgICBTdHJpbmcgIEBpZCBAZGVmYXVsdChjdWlkKCkpXG4gKiAgIHVzZXJJZCAgICAgICAgICAgICBTdHJpbmdcbiAqICAgdHlwZSAgICAgICAgICAgICAgIFN0cmluZ1xuICogICBwcm92aWRlciAgICAgICAgICAgU3RyaW5nXG4gKiAgIHByb3ZpZGVyQWNjb3VudElkICBTdHJpbmdcbiAqICAgcmVmcmVzaF90b2tlbiAgICAgIFN0cmluZz8gIEBkYi5UZXh0XG4gKiAgIGFjY2Vzc190b2tlbiAgICAgICBTdHJpbmc/ICBAZGIuVGV4dFxuICogICBleHBpcmVzX2F0ICAgICAgICAgSW50P1xuICogICB0b2tlbl90eXBlICAgICAgICAgU3RyaW5nP1xuICogICBzY29wZSAgICAgICAgICAgICAgU3RyaW5nP1xuICogICBpZF90b2tlbiAgICAgICAgICAgU3RyaW5nPyAgQGRiLlRleHRcbiAqICAgc2Vzc2lvbl9zdGF0ZSAgICAgIFN0cmluZz9cbiAqXG4gKiAgIHVzZXIgVXNlciBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpXG4gKlxuICogICBAQHVuaXF1ZShbcHJvdmlkZXIsIHByb3ZpZGVyQWNjb3VudElkXSlcbiAqIH1cbiAqXG4gKiBtb2RlbCBTZXNzaW9uIHtcbiAqICAgaWQgICAgICAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdChjdWlkKCkpXG4gKiAgIHNlc3Npb25Ub2tlbiBTdHJpbmcgICBAdW5pcXVlXG4gKiAgIHVzZXJJZCAgICAgICBTdHJpbmdcbiAqICAgZXhwaXJlcyAgICAgIERhdGVUaW1lXG4gKiAgIHVzZXIgICAgICAgICBVc2VyICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpXG4gKiB9XG4gKlxuICogbW9kZWwgVXNlciB7XG4gKiAgIGlkICAgICAgICAgICAgU3RyaW5nICAgIEBpZCBAZGVmYXVsdChjdWlkKCkpXG4gKiAgIG5hbWUgICAgICAgICAgU3RyaW5nP1xuICogICBlbWFpbCAgICAgICAgIFN0cmluZz8gICBAdW5pcXVlXG4gKiAgIGVtYWlsVmVyaWZpZWQgRGF0ZVRpbWU/XG4gKiAgIGltYWdlICAgICAgICAgU3RyaW5nP1xuICogICBhY2NvdW50cyAgICAgIEFjY291bnRbXVxuICogICBzZXNzaW9ucyAgICAgIFNlc3Npb25bXVxuICogfVxuICpcbiAqIG1vZGVsIFZlcmlmaWNhdGlvblRva2VuIHtcbiAqICAgaWRlbnRpZmllciBTdHJpbmdcbiAqICAgdG9rZW4gICAgICBTdHJpbmcgICBAdW5pcXVlXG4gKiAgIGV4cGlyZXMgICAgRGF0ZVRpbWVcbiAqXG4gKiAgIEBAdW5pcXVlKFtpZGVudGlmaWVyLCB0b2tlbl0pXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiA6Ojpub3RlXG4gKiBXaGVuIHVzaW5nIHRoZSBNeVNRTCBjb25uZWN0b3IgZm9yIFByaXNtYSwgdGhlIFtQcmlzbWEgYFN0cmluZ2AgdHlwZV0oaHR0cHM6Ly93d3cucHJpc21hLmlvL2RvY3MvcmVmZXJlbmNlL2FwaS1yZWZlcmVuY2UvcHJpc21hLXNjaGVtYS1yZWZlcmVuY2Ujc3RyaW5nKSBnZXRzIG1hcHBlZCB0byBgdmFyY2hhcigxOTEpYCB3aGljaCBtYXkgbm90IGJlIGxvbmcgZW5vdWdoIHRvIHN0b3JlIGZpZWxkcyBzdWNoIGFzIGBpZF90b2tlbmAgaW4gdGhlIGBBY2NvdW50YCBtb2RlbC4gVGhpcyBjYW4gYmUgYXZvaWRlZCBieSBleHBsaWNpdGx5IHVzaW5nIHRoZSBgVGV4dGAgdHlwZSB3aXRoIGBAZGIuVGV4dGAuXG4gKiA6OjpcbiAqXG4gKlxuICogIyMjIENyZWF0ZSB0aGUgUHJpc21hIHNjaGVtYSB3aXRoIGBwcmlzbWEgbWlncmF0ZWBcbiAqXG4gKiBUaGlzIHdpbGwgY3JlYXRlIGFuIFNRTCBtaWdyYXRpb24gZmlsZSBhbmQgZXhlY3V0ZSBpdDpcbiAqXG4gKiBgYGBcbiAqIG5weCBwcmlzbWEgbWlncmF0ZSBkZXZcbiAqIGBgYFxuICpcbiAqIE5vdGUgdGhhdCB5b3Ugd2lsbCBuZWVkIHRvIHNwZWNpZnkgeW91ciBkYXRhYmFzZSBjb25uZWN0aW9uIHN0cmluZyBpbiB0aGUgZW52aXJvbm1lbnQgdmFyaWFibGUgYERBVEFCQVNFX1VSTGAuIFlvdSBjYW4gZG8gdGhpcyBieSBzZXR0aW5nIGl0IGluIGEgYC5lbnZgIGZpbGUgYXQgdGhlIHJvb3Qgb2YgeW91ciBwcm9qZWN0LlxuICpcbiAqIFRvIGxlYXJuIG1vcmUgYWJvdXQgW1ByaXNtYSBNaWdyYXRlXShodHRwczovL3d3dy5wcmlzbWEuaW8vbWlncmF0ZSksIGNoZWNrIG91dCB0aGUgW01pZ3JhdGUgZG9jc10oaHR0cHM6Ly93d3cucHJpc21hLmlvL2RvY3MvY29uY2VwdHMvY29tcG9uZW50cy9wcmlzbWEtbWlncmF0ZSkuXG4gKlxuICogIyMjIEdlbmVyYXRpbmcgdGhlIFByaXNtYSBDbGllbnRcbiAqXG4gKiBPbmNlIHlvdSBoYXZlIHNhdmVkIHlvdXIgc2NoZW1hLCB1c2UgdGhlIFByaXNtYSBDTEkgdG8gZ2VuZXJhdGUgdGhlIFByaXNtYSBDbGllbnQ6XG4gKlxuICogYGBgXG4gKiBucHggcHJpc21hIGdlbmVyYXRlXG4gKiBgYGBcbiAqXG4gKiBUbyBjb25maWd1cmUgeW91ciBkYXRhYmFzZSB0byB1c2UgdGhlIG5ldyBzY2hlbWEgKGkuZS4gY3JlYXRlIHRhYmxlcyBhbmQgY29sdW1ucykgdXNlIHRoZSBgcHJpc21hIG1pZ3JhdGVgIGNvbW1hbmQ6XG4gKlxuICogYGBgXG4gKiBucHggcHJpc21hIG1pZ3JhdGUgZGV2XG4gKiBgYGBcbiAqXG4gKiAjIyMgTW9uZ29EQiBzdXBwb3J0XG4gKlxuICogUHJpc21hIHN1cHBvcnRzIE1vbmdvREIsIGFuZCBzbyBkb2VzIEF1dGguanMuIEZvbGxvd2luZyB0aGUgaW5zdHJ1Y3Rpb25zIG9mIHRoZSBbUHJpc21hIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vd3d3LnByaXNtYS5pby9kb2NzL2NvbmNlcHRzL2RhdGFiYXNlLWNvbm5lY3RvcnMvbW9uZ29kYikgb24gdGhlIE1vbmdvREIgY29ubmVjdG9yLCB0aGluZ3MgeW91IGhhdmUgdG8gY2hhbmdlIGFyZTpcbiAqXG4gKiAxLiBNYWtlIHN1cmUgdGhhdCB0aGUgaWQgZmllbGRzIGFyZSBtYXBwZWQgY29ycmVjdGx5XG4gKlxuICogYGBgcHJpc21hXG4gKiBpZCAgU3RyaW5nICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKFwiX2lkXCIpIEBkYi5PYmplY3RJZFxuICogYGBgXG4gKlxuICogMi4gVGhlIE5hdGl2ZSBkYXRhYmFzZSB0eXBlIGF0dHJpYnV0ZSB0byBgQGRiLlN0cmluZ2AgZnJvbSBgQGRiLlRleHRgIGFuZCB1c2VySWQgdG8gYEBkYi5PYmplY3RJZGAuXG4gKlxuICogYGBgcHJpc21hXG4gKiB1c2VyX2lkICAgICAgICAgICAgU3RyaW5nICAgQGRiLk9iamVjdElkXG4gKiByZWZyZXNoX3Rva2VuICAgICAgU3RyaW5nPyAgQGRiLlN0cmluZ1xuICogYWNjZXNzX3Rva2VuICAgICAgIFN0cmluZz8gIEBkYi5TdHJpbmdcbiAqIGlkX3Rva2VuICAgICAgICAgICBTdHJpbmc/ICBAZGIuU3RyaW5nXG4gKiBgYGBcbiAqXG4gKiBFdmVyeXRoaW5nIGVsc2Ugc2hvdWxkIGJlIHRoZSBzYW1lLlxuICpcbiAqICMjIyBOYW1pbmcgQ29udmVudGlvbnNcbiAqXG4gKiBJZiBtaXhlZCBzbmFrZV9jYXNlIGFuZCBjYW1lbENhc2UgY29sdW1uIG5hbWVzIGlzIGFuIGlzc3VlIGZvciB5b3UgYW5kL29yIHlvdXIgdW5kZXJseWluZyBkYXRhYmFzZSBzeXN0ZW0sIHdlIHJlY29tbWVuZCB1c2luZyBQcmlzbWEncyBgQG1hcCgpYChbc2VlIHRoZSBkb2N1bWVudGF0aW9uIGhlcmVdKGh0dHBzOi8vd3d3LnByaXNtYS5pby9kb2NzL2NvbmNlcHRzL2NvbXBvbmVudHMvcHJpc21hLXNjaGVtYS9uYW1lcy1pbi11bmRlcmx5aW5nLWRhdGFiYXNlKSkgZmVhdHVyZSB0byBjaGFuZ2UgdGhlIGZpZWxkIG5hbWVzLiBUaGlzIHdvbid0IGFmZmVjdCBBdXRoLmpzLCBidXQgd2lsbCBhbGxvdyB5b3UgdG8gY3VzdG9taXplIHRoZSBjb2x1bW4gbmFtZXMgdG8gd2hpY2hldmVyIG5hbWluZyBjb252ZW50aW9uIHlvdSB3aXNoLlxuICpcbiAqIEZvciBleGFtcGxlLCBtb3ZpbmcgdG8gYHNuYWtlX2Nhc2VgIGFuZCBwbHVyYWwgdGFibGUgbmFtZXMuXG4gKlxuICogYGBganNvbiB0aXRsZT1cInNjaGVtYS5wcmlzbWFcIlxuICogbW9kZWwgQWNjb3VudCB7XG4gKiAgIGlkICAgICAgICAgICAgICAgICBTdHJpbmcgIEBpZCBAZGVmYXVsdChjdWlkKCkpXG4gKiAgIHVzZXJJZCAgICAgICAgICAgICBTdHJpbmcgIEBtYXAoXCJ1c2VyX2lkXCIpXG4gKiAgIHR5cGUgICAgICAgICAgICAgICBTdHJpbmdcbiAqICAgcHJvdmlkZXIgICAgICAgICAgIFN0cmluZ1xuICogICBwcm92aWRlckFjY291bnRJZCAgU3RyaW5nICBAbWFwKFwicHJvdmlkZXJfYWNjb3VudF9pZFwiKVxuICogICByZWZyZXNoX3Rva2VuICAgICAgU3RyaW5nPyBAZGIuVGV4dFxuICogICBhY2Nlc3NfdG9rZW4gICAgICAgU3RyaW5nPyBAZGIuVGV4dFxuICogICBleHBpcmVzX2F0ICAgICAgICAgSW50P1xuICogICB0b2tlbl90eXBlICAgICAgICAgU3RyaW5nP1xuICogICBzY29wZSAgICAgICAgICAgICAgU3RyaW5nP1xuICogICBpZF90b2tlbiAgICAgICAgICAgU3RyaW5nPyBAZGIuVGV4dFxuICogICBzZXNzaW9uX3N0YXRlICAgICAgU3RyaW5nP1xuICpcbiAqICAgdXNlciBVc2VyIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSlcbiAqXG4gKiAgIEBAdW5pcXVlKFtwcm92aWRlciwgcHJvdmlkZXJBY2NvdW50SWRdKVxuICogICBAQG1hcChcImFjY291bnRzXCIpXG4gKiB9XG4gKlxuICogbW9kZWwgU2Vzc2lvbiB7XG4gKiAgIGlkICAgICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQoY3VpZCgpKVxuICogICBzZXNzaW9uVG9rZW4gU3RyaW5nICAgQHVuaXF1ZSBAbWFwKFwic2Vzc2lvbl90b2tlblwiKVxuICogICB1c2VySWQgICAgICAgU3RyaW5nICAgQG1hcChcInVzZXJfaWRcIilcbiAqICAgZXhwaXJlcyAgICAgIERhdGVUaW1lXG4gKiAgIHVzZXIgICAgICAgICBVc2VyICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpXG4gKlxuICogICBAQG1hcChcInNlc3Npb25zXCIpXG4gKiB9XG4gKlxuICogbW9kZWwgVXNlciB7XG4gKiAgIGlkICAgICAgICAgICAgIFN0cmluZyAgICBAaWQgQGRlZmF1bHQoY3VpZCgpKVxuICogICBuYW1lICAgICAgICAgICBTdHJpbmc/XG4gKiAgIGVtYWlsICAgICAgICAgIFN0cmluZz8gICBAdW5pcXVlXG4gKiAgIGVtYWlsVmVyaWZpZWQgIERhdGVUaW1lPyBAbWFwKFwiZW1haWxfdmVyaWZpZWRcIilcbiAqICAgaW1hZ2UgICAgICAgICAgU3RyaW5nP1xuICogICBhY2NvdW50cyAgICAgICBBY2NvdW50W11cbiAqICAgc2Vzc2lvbnMgICAgICAgU2Vzc2lvbltdXG4gKiAgIGF1dGhlbnRpY2F0b3JzIEF1dGhlbnRpY2F0b3JbXVxuICpcbiAqICAgQEBtYXAoXCJ1c2Vyc1wiKVxuICogfVxuICpcbiAqIG1vZGVsIFZlcmlmaWNhdGlvblRva2VuIHtcbiAqICAgaWRlbnRpZmllciBTdHJpbmdcbiAqICAgdG9rZW4gICAgICBTdHJpbmcgICBAdW5pcXVlXG4gKiAgIGV4cGlyZXMgICAgRGF0ZVRpbWVcbiAqXG4gKiAgIEBAdW5pcXVlKFtpZGVudGlmaWVyLCB0b2tlbl0pXG4gKiAgIEBAbWFwKFwidmVyaWZpY2F0aW9udG9rZW5zXCIpXG4gKiB9XG4gKlxuICogbW9kZWwgQXV0aGVudGljYXRvciB7XG4gKiAgIGlkICAgICAgICAgICAgICAgICAgIFN0cmluZyAgQGlkIEBkZWZhdWx0KGN1aWQoKSlcbiAqICAgY3JlZGVudGlhbElEICAgICAgICAgU3RyaW5nICBAdW5pcXVlXG4gKiAgIHVzZXJJZCAgICAgICAgICAgICAgIFN0cmluZ1xuICogICBwcm92aWRlckFjY291bnRJZCAgICBTdHJpbmdcbiAqICAgY3JlZGVudGlhbFB1YmxpY0tleSAgU3RyaW5nXG4gKiAgIGNvdW50ZXIgICAgICAgICAgICAgIEludFxuICogICBjcmVkZW50aWFsRGV2aWNlVHlwZSBTdHJpbmdcbiAqICAgY3JlZGVudGlhbEJhY2tlZFVwICAgQm9vbGVhblxuICogICB0cmFuc3BvcnRzICAgICAgICAgICBTdHJpbmc/XG4gKlxuICogICB1c2VyIFVzZXIgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKVxuICogfVxuICogYGBgXG4gKlxuICoqL1xuZXhwb3J0IGZ1bmN0aW9uIFByaXNtYUFkYXB0ZXIocHJpc21hKSB7XG4gICAgY29uc3QgcCA9IHByaXNtYTtcbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBXZSBuZWVkIHRvIGxldCBQcmlzbWEgZ2VuZXJhdGUgdGhlIElEIGJlY2F1c2Ugb3VyIGRlZmF1bHQgVVVJRCBpcyBpbmNvbXBhdGlibGUgd2l0aCBNb25nb0RCXG4gICAgICAgIGNyZWF0ZVVzZXI6ICh7IGlkOiBfaWQsIC4uLmRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHAudXNlci5jcmVhdGUoeyBkYXRhIH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRVc2VyOiAoaWQpID0+IHAudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQgfSB9KSxcbiAgICAgICAgZ2V0VXNlckJ5RW1haWw6IChlbWFpbCkgPT4gcC51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBlbWFpbCB9IH0pLFxuICAgICAgICBhc3luYyBnZXRVc2VyQnlBY2NvdW50KHByb3ZpZGVyX3Byb3ZpZGVyQWNjb3VudElkKSB7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgcC5hY2NvdW50LmZpbmRVbmlxdWUoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IHByb3ZpZGVyX3Byb3ZpZGVyQWNjb3VudElkIH0sXG4gICAgICAgICAgICAgICAgc2VsZWN0OiB7IHVzZXI6IHRydWUgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjY291bnQ/LnVzZXIgPz8gbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlVXNlcjogKHsgaWQsIC4uLmRhdGEgfSkgPT4gcC51c2VyLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSksXG4gICAgICAgIGRlbGV0ZVVzZXI6IChpZCkgPT4gcC51c2VyLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSksXG4gICAgICAgIGxpbmtBY2NvdW50OiAoZGF0YSkgPT4gcC5hY2NvdW50LmNyZWF0ZSh7IGRhdGEgfSksXG4gICAgICAgIHVubGlua0FjY291bnQ6IChwcm92aWRlcl9wcm92aWRlckFjY291bnRJZCkgPT4gcC5hY2NvdW50LmRlbGV0ZSh7XG4gICAgICAgICAgICB3aGVyZTogeyBwcm92aWRlcl9wcm92aWRlckFjY291bnRJZCB9LFxuICAgICAgICB9KSxcbiAgICAgICAgYXN5bmMgZ2V0U2Vzc2lvbkFuZFVzZXIoc2Vzc2lvblRva2VuKSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyQW5kU2Vzc2lvbiA9IGF3YWl0IHAuc2Vzc2lvbi5maW5kVW5pcXVlKHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBzZXNzaW9uVG9rZW4gfSxcbiAgICAgICAgICAgICAgICBpbmNsdWRlOiB7IHVzZXI6IHRydWUgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCF1c2VyQW5kU2Vzc2lvbilcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlciwgLi4uc2Vzc2lvbiB9ID0gdXNlckFuZFNlc3Npb247XG4gICAgICAgICAgICByZXR1cm4geyB1c2VyLCBzZXNzaW9uIH07XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZVNlc3Npb246IChkYXRhKSA9PiBwLnNlc3Npb24uY3JlYXRlKHsgZGF0YSB9KSxcbiAgICAgICAgdXBkYXRlU2Vzc2lvbjogKGRhdGEpID0+IHAuc2Vzc2lvbi51cGRhdGUoeyB3aGVyZTogeyBzZXNzaW9uVG9rZW46IGRhdGEuc2Vzc2lvblRva2VuIH0sIGRhdGEgfSksXG4gICAgICAgIGRlbGV0ZVNlc3Npb246IChzZXNzaW9uVG9rZW4pID0+IHAuc2Vzc2lvbi5kZWxldGUoeyB3aGVyZTogeyBzZXNzaW9uVG9rZW4gfSB9KSxcbiAgICAgICAgYXN5bmMgY3JlYXRlVmVyaWZpY2F0aW9uVG9rZW4oZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgdmVyaWZpY2F0aW9uVG9rZW4gPSBhd2FpdCBwLnZlcmlmaWNhdGlvblRva2VuLmNyZWF0ZSh7IGRhdGEgfSk7XG4gICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9ycyAvLyBNb25nb0RCIG5lZWRzIGFuIElELCBidXQgd2UgZG9uJ3RcbiAgICAgICAgICAgIGlmICh2ZXJpZmljYXRpb25Ub2tlbi5pZClcbiAgICAgICAgICAgICAgICBkZWxldGUgdmVyaWZpY2F0aW9uVG9rZW4uaWQ7XG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpY2F0aW9uVG9rZW47XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIHVzZVZlcmlmaWNhdGlvblRva2VuKGlkZW50aWZpZXJfdG9rZW4pIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmVyaWZpY2F0aW9uVG9rZW4gPSBhd2FpdCBwLnZlcmlmaWNhdGlvblRva2VuLmRlbGV0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkZW50aWZpZXJfdG9rZW4gfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9ycyAvLyBNb25nb0RCIG5lZWRzIGFuIElELCBidXQgd2UgZG9uJ3RcbiAgICAgICAgICAgICAgICBpZiAodmVyaWZpY2F0aW9uVG9rZW4uaWQpXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2ZXJpZmljYXRpb25Ub2tlbi5pZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpY2F0aW9uVG9rZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0b2tlbiBhbHJlYWR5IHVzZWQvZGVsZXRlZCwganVzdCByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vd3d3LnByaXNtYS5pby9kb2NzL3JlZmVyZW5jZS9hcGktcmVmZXJlbmNlL2Vycm9yLXJlZmVyZW5jZSNwMjAyNVxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5jb2RlID09PSBcIlAyMDI1XCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBnZXRBY2NvdW50KHByb3ZpZGVyQWNjb3VudElkLCBwcm92aWRlcikge1xuICAgICAgICAgICAgcmV0dXJuIHAuYWNjb3VudC5maW5kRmlyc3Qoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IHByb3ZpZGVyQWNjb3VudElkLCBwcm92aWRlciB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIGNyZWF0ZUF1dGhlbnRpY2F0b3IoYXV0aGVudGljYXRvcikge1xuICAgICAgICAgICAgcmV0dXJuIHAuYXV0aGVudGljYXRvclxuICAgICAgICAgICAgICAgIC5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGF1dGhlbnRpY2F0b3IsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZyb21EQkF1dGhlbnRpY2F0b3IpO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyBnZXRBdXRoZW50aWNhdG9yKGNyZWRlbnRpYWxJRCkge1xuICAgICAgICAgICAgY29uc3QgYXV0aGVudGljYXRvciA9IGF3YWl0IHAuYXV0aGVudGljYXRvci5maW5kVW5pcXVlKHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBjcmVkZW50aWFsSUQgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGF1dGhlbnRpY2F0b3IgPyBmcm9tREJBdXRoZW50aWNhdG9yKGF1dGhlbnRpY2F0b3IpIDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgbGlzdEF1dGhlbnRpY2F0b3JzQnlVc2VySWQodXNlcklkKSB7XG4gICAgICAgICAgICBjb25zdCBhdXRoZW50aWNhdG9ycyA9IGF3YWl0IHAuYXV0aGVudGljYXRvci5maW5kTWFueSh7XG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgdXNlcklkIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhdXRoZW50aWNhdG9ycy5tYXAoZnJvbURCQXV0aGVudGljYXRvcik7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIHVwZGF0ZUF1dGhlbnRpY2F0b3JDb3VudGVyKGNyZWRlbnRpYWxJRCwgY291bnRlcikge1xuICAgICAgICAgICAgcmV0dXJuIHAuYXV0aGVudGljYXRvclxuICAgICAgICAgICAgICAgIC51cGRhdGUoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNyZWRlbnRpYWxJRDogY3JlZGVudGlhbElEIH0sXG4gICAgICAgICAgICAgICAgZGF0YTogeyBjb3VudGVyIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZyb21EQkF1dGhlbnRpY2F0b3IpO1xuICAgICAgICB9LFxuICAgIH07XG59XG5mdW5jdGlvbiBmcm9tREJBdXRoZW50aWNhdG9yKGF1dGhlbnRpY2F0b3IpIHtcbiAgICBjb25zdCB7IHRyYW5zcG9ydHMsIGlkLCB1c2VyLCAuLi5vdGhlciB9ID0gYXV0aGVudGljYXRvcjtcbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5vdGhlcixcbiAgICAgICAgdHJhbnNwb3J0czogdHJhbnNwb3J0cyB8fCB1bmRlZmluZWQsXG4gICAgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@auth/prisma-adapter/index.js\n");

/***/ })

};
;