package application.core.app.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        // Desativa CSRF para testes, remova em produção
        http.csrf(csrf -> csrf.disable()).authorizeHttpRequests(auth -> auth
                        .requestMatchers(HttpMethod.GET, "/**").permitAll()  // Permite GET sem autenticação
                        .requestMatchers(HttpMethod.POST, "/**").permitAll() // Permite POST sem autenticação
                        .requestMatchers(HttpMethod.PUT, "/**").permitAll()  // Permite PUT sem autenticação
                        .requestMatchers(HttpMethod.DELETE, "/**").permitAll() // Permite DELETE sem autenticação
                        .anyRequest().authenticated()  // Exige autenticação para outras requisições
                )
                .httpBasic(withDefaults()); // Habilita autenticação Basic (opcional)

        return http.build();
    }
}


