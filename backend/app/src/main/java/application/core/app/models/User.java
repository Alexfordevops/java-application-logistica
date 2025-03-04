package application.core.app.models;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(unique = true, nullable = false, updatable = false)
  private Long id;

  @Column(nullable = false)
  private String name;

  @Column(unique = true, nullable = false, updatable = false)
  private String login;

  @Column(nullable = false)
  private String password;

  @Column(nullable = false)
  private String status = "Active";

  @Column(nullable = false)
  private String accessLevel = "User";

  @Column(nullable = false, updatable = false)
  private LocalDateTime createdAt = LocalDateTime.now();
}
