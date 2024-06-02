FROM eclipse-temurin:17-jdk
EXPOSE 8080
RUN mkdir -p /app/
ADD target/SkyQuest-0.0.1-SNAPSHOT.jar /app/skyquest-backend.jar
ADD src/main/resources/application.yml /app/application.yml
ENTRYPOINT ["sh", "-c", "java -Djava.security.egd=file:/dev/./urandom -Dspring.config.location=file:/app/application.yml -Dspring.profiles.active=local -jar /app/skyquest-backend.jar"]
